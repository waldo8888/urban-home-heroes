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
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const winterServices = [
  "Snow removal",
  "Ice management",
  "Emergency winter repairs"
];

const sectionSpacing = { py: { xs: 8, md: 12 } };

export default function SnowRemovalFocusSection() {
  return (
    <Box
      component="section"
      id="winter-focus"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={eyebrowStyle}>
                Winter Services Spotlight
              </Typography>
              <Typography variant="h2" sx={{ ...headingStyle, fontSize: { xs: "2rem", md: "3rem" }, textAlign: "left" }}>
                Snow Removal & Home Services in Vaughan & GTA
              </Typography>
              <Box sx={{ ...sectionDivider, mx: 0 }} />
              <Typography variant="body1" sx={{ ...sectionBodyStyle, textAlign: "left", mx: 0, fontSize: "1.1rem" }}>
                Professional snow removal, driveway plowing and handyman services in Woodbridge, Vaughan & the GTA. Same-day winter service and clear pricing.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  href="#estimate"
                  sx={{
                    bgcolor: "#f07a2b",
                    color: "#ffffff",
                    px: 4,
                    py: 1.4,
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#d9651f", transform: "translateY(-2px)" }
                  }}
                >
                  Get Snow Removal Quote
                </Button>
                <Button
                  variant="outlined"
                  href="/winter-services"
                  sx={{
                    borderColor: "#0e2740",
                    color: "#0e2740",
                    px: 4,
                    py: 1.4,
                    fontWeight: 700,
                    "&:hover": { borderColor: "#0e2740", bgcolor: "rgba(14, 39, 64, 0.08)" }
                  }}
                >
                  View Winter Services
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Card
                sx={{
                  borderRadius: 4,
                  p: 3,
                  border: "1px solid rgba(15, 38, 68, 0.08)",
                  boxShadow: "0 18px 36px rgba(18, 38, 62, 0.12)"
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0e2740", mb: 2 }}>
                    Winter Services We Handle
                  </Typography>
                  <Stack spacing={1.5}>
                    {winterServices.map((service) => (
                      <Stack key={service} direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckCircleRounded sx={{ color: "#f07a2b", mt: 0.3 }} />
                        <Typography variant="body2" sx={{ color: "#0e2740", fontWeight: 600 }}>
                          {service}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
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
                  <Stack direction="row" spacing={0.4} mb={1}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarRounded key={index} sx={{ color: "#f7a24d" }} />
                    ))}
                  </Stack>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    “Fast, reliable snow removal — arrived before sunrise!”
                  </Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.75)" }}>
                    — Client
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
