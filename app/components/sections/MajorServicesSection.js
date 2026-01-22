"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const allServices = [
  {
    title: "Contractor Services",
    description: "Professional contractor help for small jobs and punch lists.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    slug: "contractor-services"
  },
  {
    title: "Painting & Drywall",
    description: "Clean lines, smooth finishes, zero mess.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    slug: "painting-drywall"
  },
  {
    title: "Fence & Deck Repairs",
    description: "Wood fence repair, deck repair service, and porch repair.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
    slug: "fence-deck-repairs"
  },
  {
    title: "Appliance Installation",
    description: "Safe hookups and reliable testing.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    slug: "appliance-installation"
  },
  {
    title: "Junk Removal",
    description: "Clear-outs for garages, basements, sheds.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    slug: "junk-removal"
  },
  {
    title: "Snow Removal",
    description: "Emergency snow removal and winter safety service.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80",
    slug: "snow-removal"
  }
];

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function MajorServicesSection() {
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
            We Repair and Service All{" "}
            <Box component="span" sx={{ color: "#0e2740" }}>
              Major Home Services
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ ...sectionBodyStyle, fontSize: "1.1rem", maxWidth: 800, mx: "auto", textAlign: "center" }}>
            We repair common home issues quickly and professionally to keep your home running smoothly always.
          </Typography>
        </Stack>

        {/* Mobile Banner */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            mb: 4,
            bgcolor: "#f07a2b",
            color: "#ffffff",
            p: 3,
            borderRadius: 3,
            textAlign: "center"
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Every Home Repair Is Supported by 30+ Years of Experience
          </Typography>
          <Button
            variant="contained"
            href="#estimate"
            sx={{
              bgcolor: "#ffffff",
              color: "#f07a2b",
              mt: 2,
              "&:hover": { bgcolor: "#f0f0f0" }
            }}
          >
            Easy Booking Today
          </Button>
        </Box>

        <Grid container spacing={4} className="stagger">
          {allServices.slice(0, 4).map((service, index) => (
            <Grid item xs={12} sm={6} key={service.title} style={{ "--i": index }}>
              <Card
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  border: "1px solid rgba(15, 38, 68, 0.08)",
                  borderRadius: 3,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  }
                }}
              >
                <Box
                  sx={{
                    height: { xs: 250, md: 320 },
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                />
                <CardContent sx={{ p: 3.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#0e2740", fontSize: "1.4rem" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#6a6f75", mb: 3, lineHeight: 1.7, fontSize: "1rem" }}>
                    {service.description}
                  </Typography>
                  {index === 2 && (
                    <Button
                      variant="contained"
                      href="#detailed-services"
                      sx={{
                        bgcolor: "#0e2740",
                        color: "#ffffff",
                        px: 3,
                        py: 1.25,
                        fontWeight: 600,
                        borderRadius: 2,
                        "&:hover": {
                          bgcolor: "#1f3a53",
                          transform: "translateY(-2px)",
                          boxShadow: theme.customShadows.buttonSecondaryHover
                        }
                      }}
                    >
                      View All Services
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
