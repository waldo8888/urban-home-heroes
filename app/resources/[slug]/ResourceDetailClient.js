"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import MobileCtaBar from "../../components/MobileCtaBar";
import { eyebrowStyle, headingStyle, sectionBodyStyle } from "../../lib/sectionStyles";

const sectionSpacing = { py: { xs: 7, md: 12 } };

export default function ResourceDetailClient({ guide }) {
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
            backgroundImage: `url(${guide.image})`,
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
                    RESOURCE GUIDE
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
                    {guide.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem" }}>
                    {guide.summary}
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
                      href="/resources"
                      endIcon={<ArrowForwardRounded />}
                      sx={{
                        borderColor: "rgba(255,255,255,0.6)",
                        color: "#ffffff",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
                      }}
                    >
                      View All Resources
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {guide.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#ffffff", fontWeight: 600 }}
                      />
                    ))}
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
                KEY TAKEAWAYS
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Quick Actions That Protect Your Home
              </Typography>
              <Typography variant="body1" sx={sectionBodyStyle}>
                Follow these short lists to stay ahead of repairs and extend the life of your home.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {guide.sections.map((section) => (
                <Grid item xs={12} md={4} key={section.title}>
                  <Card sx={{ height: "100%", borderRadius: 4, p: 2.5 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 2 }}>
                        {section.title}
                      </Typography>
                      <Stack spacing={1.5}>
                        {section.bullets.map((bullet) => (
                          <Stack key={bullet} direction="row" spacing={1.2} alignItems="flex-start">
                            <CheckCircleRounded sx={{ color: "#f07a2b", mt: 0.3, fontSize: "1.1rem" }} />
                            <Typography variant="body2" sx={{ color: "#0e2740", fontWeight: 600 }}>
                              {bullet}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: "#0e2740" }}>
                  Need a contractor for this?
                </Typography>
                <Typography variant="body1" sx={{ color: "#6a6f75", fontSize: "1.05rem" }}>
                  Urban Home Heroes can handle the repair, upgrade, or seasonal maintenance for you. We offer
                  transparent pricing, same-day availability, and respectful in-home service.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ md: "flex-end" }}>
                  <Button
                    variant="contained"
                    href="/#estimate"
                    sx={{
                      bgcolor: "#0e2740",
                      color: "#ffffff",
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      "&:hover": { bgcolor: "#142c46" }
                    }}
                  >
                    Request Service
                  </Button>
                  <Button
                    variant="outlined"
                    href="/services"
                    endIcon={<ArrowForwardRounded />}
                    sx={{
                      borderColor: "rgba(14, 39, 64, 0.3)",
                      color: "#0e2740",
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      "&:hover": { borderColor: "#0e2740", bgcolor: "rgba(14, 39, 64, 0.08)" }
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
      <MobileCtaBar quoteHref="/#estimate" />
    </Box>
  );
}
