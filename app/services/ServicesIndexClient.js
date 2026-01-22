"use client";

import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import MobileCtaBar from "../components/MobileCtaBar";
import { services, serviceProcess } from "../data/services";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../lib/sectionStyles";

const sectionSpacing = { py: { xs: 7, md: 12 } };

const cardHover = {
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 22px 40px rgba(18, 38, 62, 0.16)"
  }
};

export default function ServicesIndexClient() {
  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <SiteHeader />
      <Box component="main">
        <Box
          component="section"
          sx={{
            position: "relative",
            minHeight: { xs: "520px", md: "560px" },
            display: "flex",
            alignItems: "center",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            pt: { xs: 8, md: 0 } // Add top padding on mobile to account for sticky header
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(120deg, rgba(14, 39, 64, 0.88), rgba(240, 122, 43, 0.55))"
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={2.5} sx={{ color: "#ffffff" }}>
                  <Typography variant="overline" sx={{ ...eyebrowStyle, color: "rgba(255,255,255,0.8)" }}>
                    FULL SERVICE COVERAGE
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.6rem", md: "3.6rem" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em"
                    }}
                  >
                    Contractor Services for Every Room and Season
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem" }}>
                    Urban Home Heroes provides focused service teams, clear pricing, and fast scheduling across the GTA.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      variant="contained"
                      href="/#estimate"
                      sx={{
                        bgcolor: "#ffffff",
                        color: "#0e2740",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#f8f8f8" }
                      }}
                    >
                      Get a Free Estimate
                    </Button>
                    <Button
                      variant="outlined"
                      href="tel:4168229741"
                      sx={{
                        borderColor: "rgba(255,255,255,0.6)",
                        color: "#ffffff",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
                      }}
                    >
                      Call Now
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: 1.5 }}>
                    {["Licensed and insured", "Transparent pricing", "Same day availability"].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          bgcolor: "rgba(255,255,255,0.15)",
                          px: 2,
                          py: 0.8,
                          borderRadius: "999px",
                          fontWeight: 600,
                          fontSize: "0.85rem"
                        }}
                      >
                        <CheckCircleRounded sx={{ fontSize: "1rem", color: "#f07a2b" }} />
                        {item}
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={3} textAlign="center" mb={7} alignItems="center">
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
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  border: "2px solid rgba(240, 122, 43, 0.1)"
                }}
              />
              <Typography variant="overline" sx={eyebrowStyle}>
                SERVICES
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Explore Our Service Categories
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                Each service page highlights what we include, ideal use cases, and FAQs to help you book faster.
              </Typography>
            </Stack>
            <Grid container spacing={3} className="stagger">
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={service.slug} style={{ "--i": index }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                      ...cardHover
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(14, 39, 64, 0) 40%, rgba(14, 39, 64, 0.6) 100%)"
                        }
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {service.shortName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                        {service.shortDescription}
                      </Typography>
                      <Stack spacing={1.2} sx={{ mb: 2 }}>
                        {service.highlights.map((item) => (
                          <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#f07a2b" }} />
                            <Typography variant="caption" sx={{ color: "#6a6f75", fontWeight: 600 }}>
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                      <Button
                        href={`/services/${service.slug}`}
                        endIcon={<ArrowForwardRounded />}
                        sx={{
                          color: "#f07a2b",
                          fontWeight: 700,
                          px: 0,
                          "&:hover": { bgcolor: "transparent", color: "#d9651f" }
                        }}
                      >
                        View Service
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Stack spacing={2} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                HOW IT WORKS
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                A Simple, Transparent Process
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                Clear communication from first call to final walkthrough.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {serviceProcess.map((step, index) => (
                <Grid item xs={12} md={4} key={step.title}>
                  <Card
                    sx={{
                      p: 3.5,
                      borderRadius: 4,
                      height: "100%",
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                      ...cardHover
                    }}
                  >
                    <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700 }}>
                      Step {index + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mt: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6a6f75", mt: 1.5 }}>
                      {step.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(135deg, #0e2740 0%, #1f3a53 100%)",
                color: "#ffffff",
                boxShadow: "0 24px 60px rgba(11, 25, 45, 0.3)"
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Ready to book your service?
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
                    Tell us what you need and we will respond quickly with a clear estimate.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      variant="contained"
                      href="/#estimate"
                      sx={{
                        bgcolor: "#f07a2b",
                        color: "#ffffff",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#d9651f" }
                      }}
                    >
                      Request a Quote
                    </Button>
                    <Button
                      variant="outlined"
                      href="tel:4168229741"
                      sx={{
                        borderColor: "rgba(255,255,255,0.6)",
                        color: "#ffffff",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
                      }}
                    >
                      Call Now
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </Box>
      </Box>
      <SiteFooter />
      <MobileCtaBar />
    </Box>
  );
}
