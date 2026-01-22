"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import YouTube from "@mui/icons-material/YouTube";

const serviceLinks = [
  { label: "Contractor Services", href: "/services/contractor-services" },
  { label: "Snow Removal", href: "/services/snow-removal" },
  { label: "Flooring Installation", href: "/services/flooring-installation" },
  { label: "Fence & Deck Repairs", href: "/services/fence-deck-repairs" }
];

const resourceLinks = [
  { label: "Expert Tips", href: "/resources" },
  { label: "Locations", href: "/#service-areas" },
  { label: "Service List", href: "/services" }
];

export default function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0e2740 0%, #162b3f 100%)",
        color: "#ffffff",
        py: 6,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(240, 122, 43, 0.3), transparent)"
        },
        "&::after": {
          content: '"HOME REPAIRS"',
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "8rem", md: "12rem" },
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.03)",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: "#ffffff",
                  p: 0.8,
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(18, 38, 62, 0.3)",
                  border: "2px solid rgba(240, 122, 43, 0.2)",
                  flexShrink: 0
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: "1.25rem" }}>
                  Urban Home Heroes
                </Typography>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>
                  Your Local Fix-It Hero
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}>
              Service Areas: Vaughan, Woodbridge, Kleinburg, North York, Etobicoke, North Etobicoke, Concord, Brampton, Mississauga, GTA
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
              Estimates provided after site inspection.
            </Typography>
            <Stack direction="row" spacing={1} mt={3}>
              {[
                { icon: PlaceRounded, href: "/#contact", label: "Map" },
                { icon: FacebookRounded, href: "#", label: "Facebook" },
                { icon: YouTube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "https://instagram.com/urbanhomeheroes", label: "Instagram" }
              ].map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#ffffff",
                      bgcolor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-2px)"
                    }
                  }}
                  aria-label={social.label}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Button
                component="a"
                href="/#why-us"
                sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}
              >
                Why Us
              </Button>
              <Button
                component="a"
                href="/#about"
                sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}
              >
                About Us
              </Button>
              <Button
                component="a"
                href="/#contact"
                sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}
              >
                Careers
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <Stack spacing={1}>
              {serviceLinks.map((link) => (
                <Button
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1}>
              {resourceLinks.map((link) => (
                <Button
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
            Copyright 2024 Urban Home Heroes. All rights reserved.
          </Typography>
          <Button component="a" href="#" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>
            Privacy Policy
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
