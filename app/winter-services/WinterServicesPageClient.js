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
import StarRounded from "@mui/icons-material/StarRounded";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import MobileCtaBar from "../components/MobileCtaBar";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../lib/sectionStyles";

const winterServices = [
  {
    title: "Snow Removal",
    description: "Driveway and walkway clearing for safe access all winter."
  },
  {
    title: "Ice Management",
    description: "Salt, de-icing, and hazard prevention for entrances and paths."
  },
  {
    title: "Emergency Winter Repairs",
    description: "Rapid response for storm damage, frozen fixtures, and urgent fixes."
  }
];

const winterPromises = [
  "Same-day winter service options",
  "Transparent, upfront pricing",
  "Insured contractor team",
  "Residential & commercial coverage",
  "Local GTA crews on call"
];

const sectionSpacing = { py: { xs: 7, md: 12 } };

export default function WinterServicesPageClient() {
  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <SiteHeader />

      <Box component="main">
        <Box
          component="section"
          sx={{
            position: "relative",
            minHeight: { xs: 520, md: 580 },
            display: "flex",
            alignItems: "center",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            pt: { xs: 12, md: 0 }
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(120deg, rgba(14, 39, 64, 0.92), rgba(14, 39, 64, 0.55))"
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <Stack spacing={2.5} sx={{ color: "#ffffff" }}>
                  <Typography variant="overline" sx={{ ...eyebrowStyle, color: "rgba(255,255,255,0.75)" }}>
                    Snow Removal & Home Services
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
                    Snow Removal & Home Services in Vaughan & GTA
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem" }}>
                    Professional snow removal, driveway plowing and contractor services in Woodbridge, Vaughan & the GTA.
                    Same-day winter service and clear pricing.
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                    Serving snow removal clients in Woodbridge, Vaughan, Brampton, Etobicoke, North York and Mississauga.
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
                      Get Snow Removal Quote
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
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarRounded key={index} sx={{ color: "#f7a24d" }} />
                    ))}
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                      “Fast, reliable snow removal — arrived before sunrise!” — Client
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={2.5} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                Winter Services
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Professional Snow Removal for GTA Properties
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                We keep driveways, walkways, and entrances safe while supporting urgent winter repairs when storms hit.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {winterServices.map((service) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <Card sx={{ height: "100%", borderRadius: 4, p: 3, border: "1px solid rgba(15, 38, 68, 0.08)" }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: "#0e2740", mb: 2 }}>
                  Why homeowners trust our winter team
                </Typography>
                <Typography variant="body1" sx={{ color: "#6a6f75", mb: 3 }}>
                  Urban Home Heroes delivers fast response, clear pricing, and respectful service when winter weather hits.
                </Typography>
                <Stack spacing={1.5}>
                  {winterPromises.map((promise) => (
                    <Stack key={promise} direction="row" spacing={1.2} alignItems="center">
                      <CheckCircleRounded sx={{ color: "#f07a2b" }} />
                      <Typography variant="body2" sx={{ color: "#0e2740", fontWeight: 600 }}>
                        {promise}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: 4,
                    p: 3,
                    background: "linear-gradient(135deg, rgba(14, 39, 64, 0.95), rgba(22, 43, 63, 0.95))",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Winter Service Promise
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                      Same-day response, clear communication, and reliable crews that show up on schedule.
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarRounded key={index} sx={{ color: "#f7a24d" }} />
                      ))}
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        5-star winter feedback
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#0e2740", color: "#ffffff" }}>
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Need snow removal right away?
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem" }}>
                  Book same-day service or request a winter quote for your property in the GTA.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ md: "flex-end" }}>
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
                    Get Snow Removal Quote
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
          </Container>
        </Box>
      </Box>

      <SiteFooter />
      <MobileCtaBar quoteHref="/#estimate" callLabel="Call Now" quoteLabel="Get Snow Removal Quote" />
    </Box>
  );
}
