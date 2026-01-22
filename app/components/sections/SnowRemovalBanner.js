"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import RequestQuoteRounded from "@mui/icons-material/RequestQuoteRounded";

export default function SnowRemovalBanner() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #0e2740 0%, #1f3a53 100%)",
        color: "#ffffff",
        py: { xs: 4, md: 5 },
        borderBottom: "3px solid #f07a2b"
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" alignItems="center">
          {/* Banner Alert */}
          <Box
            sx={{
              bgcolor: "rgba(240, 122, 43, 0.2)",
              border: "1px solid rgba(240, 122, 43, 0.4)",
              borderRadius: 2,
              px: 3,
              py: 1.5,
              display: "inline-block"
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#f7a24d",
                fontWeight: 700,
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                letterSpacing: "0.15em"
              }}
            >
              Winter Services Now Available — Limited Slots!
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff"
            }}
          >
            Snow Removal & Plowing Services GTA
          </Typography>

          {/* Sub Heading */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 600,
              color: "rgba(255,255,255,0.95)",
              maxWidth: 900
            }}
          >
            Snow Removal in Woodbridge & Vaughan — Professional Driveway Clearing
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(255,255,255,0.9)",
              maxWidth: 800,
              lineHeight: 1.7
            }}
          >
            Snow Plowing Services for Residential & Commercial Properties in the GTA
          </Typography>

          {/* Service Areas */}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: 700
            }}
          >
            Serving snow removal clients in Woodbridge, Vaughan, Brampton, Etobicoke, North York and Mississauga
          </Typography>

          {/* CTA Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
            <Button
              variant="contained"
              href="tel:4168229741"
              startIcon={<PhoneRounded />}
              sx={{
                bgcolor: "#f07a2b",
                color: "#ffffff",
                px: 5,
                py: 1.75,
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(240, 122, 43, 0.4)",
                "&:hover": {
                  bgcolor: "#d9651f",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(240, 122, 43, 0.5)"
                }
              }}
            >
              Call Now
            </Button>
            <Button
              variant="outlined"
              href="#estimate"
              startIcon={<RequestQuoteRounded />}
              sx={{
                borderColor: "rgba(255,255,255,0.6)",
                borderWidth: 2,
                color: "#ffffff",
                px: 5,
                py: 1.75,
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: 2,
                "&:hover": {
                  borderColor: "#ffffff",
                  bgcolor: "rgba(255,255,255,0.12)",
                  transform: "translateY(-2px)"
                }
              }}
            >
              Get Snow Removal Quote
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
