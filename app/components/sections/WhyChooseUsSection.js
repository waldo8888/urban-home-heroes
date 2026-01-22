"use client";

import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import ScheduleRounded from "@mui/icons-material/ScheduleRounded";
import ReceiptRounded from "@mui/icons-material/ReceiptRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle } from "../../lib/sectionStyles";

const whyChooseUs = [
  {
    title: "Flexible Scheduling and Quick Repairs",
    description: "We promptly assess your home repair needs, explain the work required, and provide a clear, upfront quote.",
    icon: ScheduleRounded,
    iconBg: "#0e2740"
  },
  {
    title: "Transparent Costs",
    description: "No hidden fees or surprises. We provide clear, upfront pricing so you know exactly what to expect.",
    icon: ReceiptRounded,
    iconBg: "#1f2a37"
  },
  {
    title: "Trusted Quality",
    description: "Over 30 years of combined experience with guaranteed workmanship and customer satisfaction.",
    icon: VerifiedRounded,
    iconBg: "#1f2a37"
  }
];

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function WhyChooseUsSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="why-us"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3} mb={4}>
              <Typography variant="h2" sx={{ ...headingStyle, textAlign: "left", mb: 2 }}>
                Why Choose{" "}
                <Box component="span" sx={{ color: "#0e2740" }}>
                  Urban Home Heroes
                </Box>{" "}
                to Repair
              </Typography>
              <Typography variant="body1" sx={{ ...sectionBodyStyle, textAlign: "left", fontSize: "1.1rem", color: "#6a6f75" }}>
                Reliable home repair with skilled contractors ensuring satisfaction every single time.
              </Typography>
            </Stack>
            <Stack spacing={2}>
              {whyChooseUs.map((item, index) => (
                <Card
                  key={item.title}
                  sx={{
                    p: 3,
                    border: "1px solid rgba(15, 38, 68, 0.08)",
                    background: "#ffffff",
                    borderRadius: 2,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                      borderColor: "rgba(240, 122, 43, 0.2)"
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        bgcolor: item.iconBg,
                        color: "#ffffff",
                        borderRadius: 2,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <item.icon sx={{ fontSize: "1.75rem" }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ color: "#0e2740", fontWeight: 700, mb: 1, fontSize: "1.1rem" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75", lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: index === 0 ? "#0e2740" : "#ffffff",
                        color: index === 0 ? "#ffffff" : "#0e2740",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: index === 0 ? "none" : "1px solid rgba(15, 38, 68, 0.2)",
                        flexShrink: 0,
                        mt: 0.5
                      }}
                    >
                      <ArrowForwardRounded sx={{ fontSize: "1rem", transform: "rotate(-45deg)" }} />
                    </Box>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: { xs: 400, md: 600 },
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                boxShadow: theme.customShadows.large
              }}
            >
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  p: 1,
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  border: "2px solid rgba(240, 122, 43, 0.2)",
                  zIndex: 2
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
