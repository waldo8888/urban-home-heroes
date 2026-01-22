"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import MobileCtaBar from "../components/MobileCtaBar";
import { resourceGuides, quickTipCategories, seasonalChecklist } from "../data/resources";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../lib/sectionStyles";

const sectionSpacing = { py: { xs: 7, md: 12 } };

const cardHover = {
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 18px 36px rgba(18, 38, 62, 0.16)"
  }
};

export default function ResourcesPageClient() {
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
              "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80)",
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
                    HELPFUL RESOURCES
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
                    Practical Tips to Keep Your Home Running Smoothly
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem" }}>
                    Use these quick guides to maintain efficiency, extend the life of your home, and avoid unnecessary replacements.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      variant="contained"
                      href="#quick-tips"
                      endIcon={<ArrowForwardRounded />}
                      sx={{
                        bgcolor: "#ffffff",
                        color: "#0e2740",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#f8f8f8" }
                      }}
                    >
                      Jump to Quick Tips
                    </Button>
                    <Button
                      variant="outlined"
                      href="/#estimate"
                      sx={{
                        borderColor: "rgba(255,255,255,0.6)",
                        color: "#ffffff",
                        px: 4,
                        py: 1.6,
                        fontWeight: 700,
                        "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
                      }}
                    >
                      Request a Quote
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={3} textAlign="center" mb={7} alignItems="center">
              <Typography variant="overline" sx={eyebrowStyle}>
                RESOURCE LIBRARY
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Home Repair Tips You Can Use Right Away
              </Typography>
              <Box sx={sectionDivider} />
              <Typography variant="body1" sx={sectionBodyStyle}>
                Browse short guides built for busy homeowners, seniors, and families. Use these tips to protect your space and plan smarter repairs.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {resourceGuides.map((guide) => (
                <Grid item xs={12} md={4} key={guide.title}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "1px solid rgba(15, 38, 68, 0.08)",
                      boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                      display: "flex",
                      flexDirection: "column",
                      ...cardHover
                    }}
                  >
                    <Box
                      sx={{
                        height: 210,
                        backgroundImage: `url(${guide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(14, 39, 64, 0) 35%, rgba(14, 39, 64, 0.55) 100%)"
                        }
                      }}
                    />
                    <CardContent sx={{ p: 3, flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {guide.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                        {guide.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {guide.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ bgcolor: "rgba(240, 122, 43, 0.12)", color: "#0e2740", fontWeight: 600 }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ px: 3, pb: 3 }}>
                      <Button
                        variant="outlined"
                        href={`/resources/${guide.slug}`}
                        endIcon={<ArrowForwardRounded />}
                        sx={{
                          borderColor: "rgba(14, 39, 64, 0.2)",
                          color: "#0e2740",
                          fontWeight: 600,
                          "&:hover": { borderColor: "#0e2740", bgcolor: "rgba(14, 39, 64, 0.06)" }
                        }}
                      >
                        Read Guide
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" id="quick-tips" sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}>
          <Container maxWidth="lg">
            <Stack spacing={2.5} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                QUICK TIPS
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Fast Wins to Protect Your Home
              </Typography>
              <Typography variant="body1" sx={sectionBodyStyle}>
                Simple checks you can do in minutes to prevent bigger repairs later.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {quickTipCategories.map((category) => (
                <Grid item xs={12} md={6} key={category.title}>
                  <Card sx={{ height: "100%", borderRadius: 4, p: 2.5, ...cardHover }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {category.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                        {category.description}
                      </Typography>
                      <Stack spacing={1.5}>
                        {category.tips.map((tip) => (
                          <Stack key={tip} direction="row" spacing={1.2} alignItems="flex-start">
                            <CheckCircleRounded sx={{ color: "#f07a2b", mt: 0.3, fontSize: "1.1rem" }} />
                            <Typography variant="body2" sx={{ color: "#0e2740", fontWeight: 600 }}>
                              {tip}
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

        <Box component="section" sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <Stack spacing={2.5} textAlign="center" mb={6}>
              <Typography variant="overline" sx={eyebrowStyle}>
                MAINTENANCE BY SEASON
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Keep Your Home Ready All Year
              </Typography>
              <Typography variant="body1" sx={sectionBodyStyle}>
                Follow these seasonal priorities to keep your property protected and your budget predictable.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {seasonalChecklist.map((season) => (
                <Grid item xs={12} sm={6} md={3} key={season.season}>
                  <Card sx={{ height: "100%", borderRadius: 4, p: 2.5, ...cardHover }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
                        {season.season}
                      </Typography>
                      <Stack spacing={1.2}>
                        {season.tasks.map((task) => (
                          <Stack key={task} direction="row" spacing={1} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                bgcolor: "#f07a2b",
                                borderRadius: "50%",
                                mt: 0.9
                              }}
                            />
                            <Typography variant="body2" sx={{ color: "#6a6f75", fontWeight: 600 }}>
                              {task}
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

        <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#0e2740", color: "#ffffff" }}>
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Want a contractor to handle it for you?
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem" }}>
                  Urban Home Heroes is ready for same-day jobs, small repairs, and larger projects across the GTA.
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
