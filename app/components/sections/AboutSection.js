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
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";



const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function AboutSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="about"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" mb={6} alignItems="center">
          <Box
            component="img"
            src="/urban-home-hero-logo.jpg"
            alt="Urban Home Heroes logo"
            sx={{
              width: { xs: 64, md: 80 },
              height: { xs: 64, md: 80 },
              bgcolor: "#ffffff",
              p: 1,
              borderRadius: 2,
              boxShadow: theme.customShadows.medium,
              border: "2px solid rgba(240, 122, 43, 0.1)"
            }}
          />
          <Typography variant="overline" sx={eyebrowStyle}>
            ABOUT US
          </Typography>
          <Typography variant="h2" sx={headingStyle}>
            About{" "}
            <Box component="span" sx={{ color: "#f07a2b" }}>
              Urban Home Heroes
            </Box>
          </Typography>
          <Box sx={sectionDivider} />
        </Stack>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: "#6a6f75", mb: 3 }}>
              Urban Home Heroes is a local family business and honest contractor team. Every job is completed in-house with reliable home services - no subcontractors, no surprises.
            </Typography>
            <Card
              sx={{
                p: 3,
                mb: 3,
                bgcolor: "#ffffff",
                border: "1px solid rgba(15, 38, 68, 0.08)",
                boxShadow: theme.customShadows.medium
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5, color: "#0e2740" }}>
                Why Urban Home Heroes Was Founded
              </Typography>
              <Typography variant="body1" sx={{ color: "#6a6f75" }}>
                Urban Home Heroes was built to give homeowners reliable, honest contractor support with transparent pricing. We believe getting small jobs done should not be stressful, expensive, or require calling five different companies.
              </Typography>
            </Card>
            <Stack spacing={1.5}>
              {[
                "Serving the Greater Toronto Area (GTA)",
                "Senior, family, and pet-friendly service",
                "Licensed and insured"
              ].map((item) => (
                <Stack direction="row" spacing={1.5} alignItems="center" key={item}>
                  <CheckCircleRounded sx={{ color: "#f07a2b", fontSize: "1.1rem" }} />
                  <Typography sx={{ color: "#0e2740", fontWeight: 600 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
              {[
                { label: "30+ years", sub: "Combined experience" },
                { label: "In-house", sub: "No subcontractors" },
                { label: "GTA wide", sub: "Service coverage" }
              ].map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    flex: 1,
                    bgcolor: "#ffffff",
                    borderRadius: 2,
                    border: "1px solid rgba(15, 38, 68, 0.08)",
                    p: 2,
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // from cardHover
                    boxShadow: theme.customShadows.soft, // initial shadow
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)", // from cardHover
                      boxShadow: theme.customShadows.medium // hover shadow
                    }
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#0e2740" }}>{stat.label}</Typography>
                  <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                    {stat.sub}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: { xs: 300, md: 400 },
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
