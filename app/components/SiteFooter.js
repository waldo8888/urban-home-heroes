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
import { motion } from "framer-motion";

const serviceLinks = [
  { label: "Winter Services", href: "/winter-services" },
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
        background: "#0e2740", // Brand Dark Blue
        color: "#ffffff",
        py: 8,
        position: "relative",
        overflow: "hidden",
        borderTop: "4px solid #f07a2b", // Brand Orange accent
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}
              />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, lineHeight: 1 }}>
                  Urban<br />Home Heroes
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 3, maxWidth: "300px", lineHeight: 1.6 }}>
              Local, reliable, and verified experts for all your home repair needs. Serving the Greater Toronto Area.
            </Typography>

            <Stack direction="row" spacing={1.5}>
              {[
                { icon: FacebookRounded, href: "#", label: "Facebook", color: "#1877F2" },
                { icon: Instagram, href: "https://instagram.com/urbanhomeheroes", label: "Instagram", color: "#E4405F" },
                { icon: YouTube, href: "#", label: "YouTube", color: "#FF0000" },
                { icon: PlaceRounded, href: "/#contact", label: "Map", color: "#34A853" }
              ].map((social) => (
                <IconButton
                  key={social.label}
                  component={motion.a}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    "&:hover": { color: social.color, borderColor: social.color }
                  }}
                  aria-label={social.label}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: "#f07a2b" }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["Why Us", "About Us", "Careers", "Contact"].map((item) => (
                <Button
                  key={item}
                  component={motion.a}
                  href={`/#${item.toLowerCase().replace(" ", "-")}`}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    justifyContent: "flex-start",
                    px: 0,
                    minWidth: 0,
                    "&:hover": { color: "#ffffff", background: "none" }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: "#f07a2b" }}>
              Services
            </Typography>
            <Stack spacing={1.5}>
              {serviceLinks.slice(0, 5).map((link) => (
                <Button
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    justifyContent: "flex-start",
                    px: 0,
                    textAlign: "left",
                    "&:hover": { color: "#ffffff", background: "none" }
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: "#f07a2b" }}>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              <Button sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}>Privacy Policy</Button>
              <Button sx={{ color: "rgba(255,255,255,0.7)", justifyContent: "flex-start", px: 0 }}>Terms of Service</Button>
            </Stack>

            <Box sx={{ mt: 4, p: 2, borderRadius: 2, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", display: "block" }}>
                © 2026 Urban Home Heroes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
