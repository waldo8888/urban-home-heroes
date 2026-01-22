"use client";

import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import MobileCtaBar from "../../components/MobileCtaBar";
import { serviceAreas, serviceProcess } from "../../data/services";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const sectionSpacing = { py: { xs: 7, md: 12 } };

const cardHover = {
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 20px 40px rgba(18, 38, 62, 0.16)"
  }
};

export default function ServiceDetailClient({ service, related }) {
  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <SiteHeader />
      <Box component="main">
        <Box
          component="section"
          sx={{
            position: "relative",
            minHeight: { xs: "520px", md: "580px" },
            display: "flex",
            alignItems: "center",
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pt: { xs: 8, md: 0 } // Add top padding on mobile to account for sticky header
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(120deg, rgba(14, 39, 64, 0.9), rgba(240, 122, 43, 0.55))"
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={2.5} sx={{ color: "#ffffff" }}>
                  <Typography variant="overline" sx={{ ...eyebrowStyle, color: "rgba(255,255,255,0.8)" }}>
                    SERVICE DETAIL
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
                    {service.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem" }}>
                    {service.heroSubtitle}
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
                    {service.highlights.map((item) => (
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
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "0 24px 60px rgba(11, 25, 45, 0.25)"
                  }}
                >
                  <Typography variant="overline" sx={{ ...eyebrowStyle, fontSize: "0.7rem" }}>
                    WHAT IS INCLUDED
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#0e2740", mt: 1, mb: 2 }}>
                    Typical requests
                  </Typography>
                  <Stack spacing={1.5}>
                    {service.included.slice(0, 5).map((item) => (
                      <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                        <CheckCircleRounded sx={{ color: "#f07a2b", fontSize: "1.1rem" }} />
                        <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button
                    href="/#estimate"
                    endIcon={<ArrowForwardRounded />}
                    sx={{ color: "#f07a2b", fontWeight: 700, px: 0, mt: 2 }}
                  >
                    Request this service
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
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
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  border: "2px solid rgba(240, 122, 43, 0.1)"
                }}
              />
              <Typography variant="overline" sx={eyebrowStyle}>
                INCLUDED
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                What We Handle for {service.shortName}
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                Each project is scoped based on your space, materials, and timeline.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {service.included.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item} style={{ "--i": index }}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      height: "100%",
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 14px 30px rgba(18, 38, 62, 0.1)",
                      ...cardHover
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                      {item}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                      Delivered by our licensed contractor team with transparent pricing.
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography variant="overline" sx={eyebrowStyle}>
                  IDEAL FOR
                </Typography>
                <Typography variant="h2" sx={{ ...headingStyle, mb: 1 }}>
                  Projects That Benefit Most
                </Typography>
                <Box sx={{ ...sectionDivider, mx: 0 }} />
                <Typography variant="body1" sx={{ ...sectionBodyStyle, mx: 0 }}>
                  We tailor the scope to your home, timeline, and budget.
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Grid container spacing={3}>
                  {service.idealFor.map((item) => (
                    <Grid item xs={12} sm={6} key={item}>
                      <Card
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          border: "1px solid rgba(15, 38, 68, 0.08)",
                          boxShadow: "0 16px 32px rgba(18, 38, 62, 0.1)",
                          ...cardHover
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                          {item}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                          Clear estimates and dependable scheduling.
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={2} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                PROCESS
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                How Our Contractor Team Works
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                Fast scheduling, clear communication, and reliable results.
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

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Stack spacing={2} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                SERVICE AREAS
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Serving the Greater Toronto Area
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                We deliver contractor services across Vaughan, Woodbridge, and the GTA.
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              {serviceAreas.map((area) => (
                <Grid item xs={12} sm={6} md={4} key={area}>
                  <Box
                    sx={{
                      borderRadius: 4,
                      border: "1px solid rgba(240, 122, 43, 0.2)",
                      background: "linear-gradient(135deg, rgba(255, 241, 230, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
                      backdropFilter: "blur(10px)",
                      p: 3,
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#0e2740",
                      boxShadow: "0 4px 12px rgba(240, 122, 43, 0.1)"
                    }}
                  >
                    {area}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={2} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                FAQ
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Answers About {service.shortName}
              </Typography>
              <Box sx={sectionDivider} />
            </Stack>
            <Grid container spacing={3}>
              {service.faqs.map((faq) => (
                <Grid item xs={12} md={4} key={faq.question}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 14px 30px rgba(18, 38, 62, 0.1)",
                      height: "100%"
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1.5 }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                      {faq.answer}
                    </Typography>
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
                RELATED SERVICES
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Explore More Contractor Services
              </Typography>
              <Box sx={sectionDivider} />
            </Stack>
            <Grid container spacing={3}>
              {related.map((item) => (
                <Grid item xs={12} md={4} key={item.slug}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                      ...cardHover
                    }}
                  >
                    <Box
                      sx={{
                        height: 180,
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {item.shortName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                        {item.shortDescription}
                      </Typography>
                      <Button
                        href={`/services/${item.slug}`}
                        endIcon={<ArrowForwardRounded />}
                        sx={{ color: "#f07a2b", fontWeight: 700, px: 0 }}
                      >
                        View service
                      </Button>
                    </CardContent>
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
                    Ready to schedule {service.shortName}?
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
                    Share your project details and we will respond quickly with a transparent estimate.
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
