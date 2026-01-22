"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { eyebrowStyle, headingStyle } from "../../lib/sectionStyles";

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function ExpertServiceSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius,
                overflow: "hidden",
                height: { xs: 300, md: 400 },
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 24,
                  bottom: 24,
                  bgcolor: "rgba(255,255,255,0.95)",
                  borderRadius: 2,
                  px: 2.5,
                  py: 2,
                  boxShadow: theme.customShadows.medium,
                  maxWidth: 280
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
                  <Box
                    component="img"
                    src="/urban-home-hero-logo.jpg"
                    alt="Urban Home Heroes logo"
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "#ffffff",
                      p: 0.4,
                      borderRadius: 1.5,
                      border: "1px solid rgba(240, 122, 43, 0.2)"
                    }}
                  />
                  <Typography sx={{ fontWeight: 700, color: "#0e2740", fontSize: "1.1rem" }}>
                    30+ Years Experience
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "#6a6f75" }}>
                  Trusted local contractor team
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={eyebrowStyle}>
                EXPERT SERVICE
              </Typography>
              <Typography variant="h2" sx={headingStyle}>
                Expert Service
              </Typography>
              <Divider sx={{ borderColor: "rgba(15, 38, 68, 0.1)", width: 60 }} />
              <Typography variant="body1" sx={{ color: "#6a6f75", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Every day your property needs attention, you need reliable help. Homeowners and property managers trust Urban Home Heroes to manage their repair needs and maximize the value of their investment. We help property owners maintain their homes, avoid costly mistakes, and get quality work done faster.
              </Typography>
              <Typography variant="body1" sx={{ color: "#6a6f75", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 600 }}>
                Service You Can Trust!
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
                <Button
                  variant="contained"
                  href="#estimate"
                  sx={{
                    bgcolor: "#f07a2b",
                    color: "#ffffff",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: theme.customShadows.buttonPrimary,
                    "&:hover": {
                      bgcolor: "#d9651f",
                      transform: "translateY(-2px)",
                      boxShadow: theme.customShadows.buttonPrimaryHover
                    }
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
