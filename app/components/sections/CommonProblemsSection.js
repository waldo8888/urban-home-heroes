"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const commonProblems = [
  {
    title: "Flooring",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    items: [
      "Vinyl & laminate installation",
      "Minor subfloor fixes",
      "Trim finishing"
    ]
  },
  {
    title: "Plumbing",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    items: [
      "Faucets & toilets",
      "Vanity installs",
      "Small leaks"
    ]
  },
  {
    title: "Electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    items: [
      "Light fixtures",
      "GFCI outlets",
      "Switch replacements"
    ]
  }
];

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function CommonProblemsSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={8}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: { xs: "2rem", md: "2.75rem" } }}>
            We Repair the Most{" "}
            <Box component="span" sx={{ color: "#0e2740" }}>
              Common Home Problems
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ ...sectionBodyStyle, fontSize: "1.1rem", maxWidth: 800, mx: "auto", borderStyle: "none", borderWidth: 0, borderColor: "rgba(0, 0, 0, 0)", borderImage: "none", ml: "100px" }}>
            We repair the most common home problems fast, ensuring your home runs smoothly and efficiently again.
          </Typography>
        </Stack>
        <Grid container spacing={3} className="stagger">
          {commonProblems.map((problem, index) => {
            const isFeatured = index === 1; // Middle card (Plumbing) is featured
            return (
              <Grid item xs={12} md={4} key={problem.title} style={{ "--i": index }}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: isFeatured ? "#0e2740" : "#ffffff",
                    color: isFeatured ? "#ffffff" : "#1f2a37",
                    border: isFeatured ? "none" : "1px solid rgba(15, 38, 68, 0.08)",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: isFeatured
                      ? "0 8px 32px rgba(14, 39, 64, 0.3)"
                      : "0 2px 8px rgba(0, 0, 0, 0.08)",
                    transform: isFeatured ? { md: "translateY(-8px) rotate(-2deg)" } : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: isFeatured
                        ? { md: "translateY(-12px) rotate(-1deg)" }
                        : "translateY(-8px) scale(1.02)",
                      boxShadow: isFeatured
                        ? "0 12px 40px rgba(14, 39, 64, 0.4)"
                        : "0 8px 24px rgba(0, 0, 0, 0.12)",
                    }
                  }}
                >
                  {problem.image && (
                    <Box
                      sx={{
                        height: 220,
                        backgroundImage: `url(${problem.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: isFeatured
                            ? "linear-gradient(180deg, rgba(14, 39, 64, 0.4) 0%, rgba(14, 39, 64, 0.95) 100%)"
                            : "linear-gradient(180deg, rgba(240, 122, 43, 0.3) 0%, rgba(14, 39, 64, 0.7) 100%)"
                        }
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2.5,
                        color: isFeatured ? "#ffffff" : "#0e2740",
                        fontSize: "1.5rem"
                      }}
                    >
                      {problem.title}
                    </Typography>
                    <Stack spacing={1.5}>
                      {problem.items.map((item) => (
                        <Stack direction="row" spacing={1.5} alignItems="flex-start" key={item}>
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              bgcolor: isFeatured ? "#f07a2b" : "#f07a2b",
                              mt: "0.5rem",
                              flexShrink: 0,
                              boxShadow: isFeatured ? theme.customShadows.shadowPrimary : "none"
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: isFeatured ? "rgba(255,255,255,0.95)" : "#6a6f75",
                              fontSize: "0.95rem",
                              lineHeight: 1.6
                            }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  )
}
