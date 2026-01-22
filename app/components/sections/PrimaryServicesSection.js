"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const primaryServices = [
  {
    title: "Contractor Services",
    description: "Licensed contractor support for small jobs and repairs."
  },
  {
    title: "Snow Removal",
    description: "Emergency snow removal near me and safe winter response."
  },
  {
    title: "Flooring Installation",
    description: "Vinyl and laminate done right."
  },
  {
    title: "Painting & Drywall",
    description: "Patch, prep, and paint with care."
  },
  {
    title: "Minor Plumbing & Electrical",
    description: "Fixtures, outlets, and safety checks."
  },
  {
    title: "Fence & Deck Repairs",
    description: "Fence repair service, deck repair service, and railing installation."
  },
  {
    title: "Appliance Installation",
    description: "Hook-ups and secure installations."
  },
  {
    title: "Junk Removal",
    description: "Clear the clutter in a single visit."
  }
];



const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function PrimaryServicesSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="services"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" mb={8} alignItems="center">
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
            WHAT WE DO
          </Typography>
          <Typography variant="h2" sx={headingStyle}>
            Our Services
          </Typography>
          <Box sx={sectionDivider} />
          <Typography variant="body1" sx={sectionBodyStyle}>
            Reliable home services from a licensed contractor team for every season.
          </Typography>
        </Stack>
        <Grid container spacing={3} className="stagger" mb={4}>
          {primaryServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title} style={{ "--i": index }}>
                                                <Card
                                                  sx={{
                                                    height: "100%",
                                                    p: 3,
                                                    border: "1px solid rgba(15, 38, 68, 0.06)",
                                                    background: "rgba(255, 255, 255, 0.8)",
                                                    backdropFilter: "blur(10px)",
                                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                    boxShadow: theme.customShadows.soft,
                                                    "&:hover": {
                                                      transform: "translateY(-8px) scale(1.02)",
                                                      boxShadow: theme.customShadows.medium,
                                                      borderColor: "rgba(240, 122, 43, 0.2)"
                                                    }
                                                  }}
                                                >                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      bgcolor: "#fff1e6",
                      color: "#f07a2b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#0e2740" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                    {service.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} justifyContent="center" mt={8}>
          <Button
            variant="outlined"
            href="/services"
            className="btn-modern"
            sx={{
              borderColor: "#f07a2b",
              borderWidth: 2,
              color: "#f07a2b",
              px: 5,
              py: 1.75,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                borderColor: "#d9651f",
                borderWidth: 2,
                bgcolor: "rgba(240, 122, 43, 0.08)",
                transform: "translateY(-3px)",
                boxShadow: theme.customShadows.buttonPrimaryHover
              }
            }}
          >
            View All Services
          </Button>
          <Button
            variant="contained"
            href="#estimate"
            className="btn-modern"
            sx={{
              bgcolor: "#f07a2b",
              color: "#ffffff",
              px: 5,
              py: 1.75,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: 2,
              boxShadow: theme.customShadows.buttonPrimary,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                bgcolor: "#d9651f",
                transform: "translateY(-3px) scale(1.02)",
                boxShadow: theme.customShadows.buttonPrimaryHover
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 0,
                height: 0,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.2)",
                transform: "translate(-50%, -50%)",
                transition: "width 0.6s, height 0.6s"
              },
              "&:hover::before": {
                width: 400,
                height: 400
              }
            }}
          >
            Book Service
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
