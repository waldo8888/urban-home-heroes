"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const seasonalGroups = [
  {
    title: "Winter Services",
    description: "Focused support for safe, clear properties all season.",
    items: ["Snow removal", "Ice management", "Emergency winter repairs"],
    cta: { label: "Snow Removal & Winter Services", href: "/winter-services" }
  },
  {
    title: "Spring / Summer Services",
    description: "Recovery and upgrades for warmer months.",
    items: ["Basement renovation (post-flood)", "Fence & deck repair/installation", "Landscaping", "Property maintenance"]
  },
  {
    title: "Year-Round Services",
    description: "Trusted contractor work all year long.",
    items: [
      "Handyman repairs",
      "Flooring",
      "Painting",
      "Drywall",
      "Framing",
      "Windows & doors",
      "Bathroom and kitchen renovations"
    ]
  }
];

const sectionSpacing = { py: { xs: 8, md: 12 } };

export default function SeasonalServicesSection() {
  return (
    <Box
      component="section"
      id="seasonal-services"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5} textAlign="center" mb={6} alignItems="center">
          <Typography variant="overline" sx={eyebrowStyle}>
            Services by Season
          </Typography>
          <Typography variant="h2" sx={headingStyle}>
            Seasonal Coverage for Every Property Need
          </Typography>
          <Box sx={sectionDivider} />
          <Typography variant="body1" sx={sectionBodyStyle}>
            We prioritize winter snow removal now, while keeping full-service coverage available year-round.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {seasonalGroups.map((group) => (
            <Grid item xs={12} md={4} key={group.title}>
              <Card sx={{ height: "100%", borderRadius: 4, p: 3, border: "1px solid rgba(15, 38, 68, 0.08)" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                    {group.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                    {group.description}
                  </Typography>
                  <Stack spacing={1.3} mb={group.cta ? 3 : 0}>
                    {group.items.map((item) => (
                      <Stack key={item} direction="row" spacing={1.2} alignItems="flex-start">
                        <CheckCircleRounded sx={{ color: "#f07a2b", mt: 0.3, fontSize: "1rem" }} />
                        <Typography variant="body2" sx={{ color: "#0e2740", fontWeight: 600 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  {group.cta && (
                    <Button
                      variant="contained"
                      href={group.cta.href}
                      sx={{
                        bgcolor: "#0e2740",
                        color: "#ffffff",
                        px: 3,
                        py: 1.2,
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#142c46", transform: "translateY(-2px)" }
                      }}
                    >
                      {group.cta.label}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
