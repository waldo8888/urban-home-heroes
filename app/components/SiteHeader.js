"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import CalendarMonthRounded from "@mui/icons-material/CalendarMonthRounded";
import AcUnitRounded from "@mui/icons-material/AcUnitRounded";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/resources" }
];

export default function SiteHeader({ hideOnMobile = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Promo Banner */}
      <AnimatePresence>
        {showBanner && (
          <Box
            component={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1300, // Higher than AppBar
              background: "linear-gradient(90deg, #f07a2b 0%, #ff9d57 100%)",
              color: "#ffffff",
              overflow: "hidden"
            }}
          >
            <Container maxWidth="xl">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 1, sm: 2 }}
                sx={{
                  py: { xs: 0.5, sm: 1 },
                  position: "relative",
                  height: { xs: 36, sm: 44 }, // Explicit fixed height
                  alignItems: "center"
                }}
              >
                <AcUnitRounded sx={{ fontSize: "1rem", animation: "spin 3s linear infinite", display: { xs: "none", sm: "block" } }} />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "0.7rem", sm: "0.85rem" },
                    letterSpacing: "0.03em",
                    textAlign: "center",
                    pr: { xs: 4, sm: 0 } // Space for close button on mobile
                  }}
                >
                  ❄️ WINTER SERVICES — LIMITED SLOTS!{" "}
                  <Box
                    component="a"
                    href="#estimate"
                    sx={{
                      color: "#fff",
                      textDecoration: "underline",
                      fontWeight: 800,
                      "&:hover": { color: "#0e2740" }
                    }}
                  >
                    Book Now →
                  </Box>
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => setShowBanner(false)}
                  sx={{
                    position: "absolute",
                    right: { xs: 4, sm: 0 },
                    color: "#fff",
                    minWidth: 36,
                    minHeight: 36,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" }
                  }}
                >
                  <CloseRounded sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Stack>
            </Container>
          </Box>
        )}
      </AnimatePresence>

      {/* Main App Bar */}
      <AppBar
        position="fixed"
        elevation={0}
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          top: showBanner ? { xs: 36, sm: 44 } : 0, // Must match banner heights exactly
          zIndex: 1200, // Below banner
          background: isScrolled
            ? "rgba(14, 39, 64, 0.95)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(240, 122, 43, 0.2)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.15)"
            : "none",
          transition: "all 0.3s ease",
          ...(hideOnMobile && !isScrolled && {
            opacity: 0,
            pointerEvents: "none"
          })
        }}
      >
        <Container maxWidth="xl" sx={{ height: { xs: "72px", md: "80px" } }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            {/* Logo Section */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              component={motion.a}
              href="/"
              whileHover={{ scale: 1.03 }}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                component={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  border: "2px solid rgba(255,255,255,0.1)"
                }}
              >
                <Box
                  component="img"
                  src="/urban-home-hero-logo.jpg"
                  alt="Urban Home Heroes logo"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    display: { xs: "none", sm: "block" },
                    lineHeight: 1.1,
                    color: "#ffffff",
                  }}
                >
                  Urban Home Heroes
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.05em",
                    fontWeight: 500
                  }}
                >
                  Your Local Fix-It Hero
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center"
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 600,
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": {
                      color: "#ffffff",
                      background: "rgba(255,255,255,0.1)",
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Box sx={{ width: 16 }} />

              {/* Glowing CTA Button */}
              <Button
                variant="contained"
                href="/#estimate"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                startIcon={<CalendarMonthRounded />}
                sx={{
                  bgcolor: "#f07a2b",
                  color: "#ffffff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: "0 0 20px rgba(240, 122, 43, 0.4), 0 4px 12px rgba(240, 122, 43, 0.3)",
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": {
                      boxShadow: "0 0 20px rgba(240, 122, 43, 0.4), 0 4px 12px rgba(240, 122, 43, 0.3)"
                    },
                    "50%": {
                      boxShadow: "0 0 30px rgba(240, 122, 43, 0.6), 0 6px 16px rgba(240, 122, 43, 0.4)"
                    }
                  },
                  "&:hover": {
                    bgcolor: "#d9651f",
                  }
                }}
              >
                Request Same-Day Service
              </Button>
            </Stack>

            {/* Mobile Menu Toggle */}
            <IconButton
              sx={{ color: "#ffffff", display: { md: "none" } }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuRounded sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: "linear-gradient(180deg, #0e2740 0%, #1a3a52 100%)",
            borderLeft: "1px solid rgba(240, 122, 43, 0.2)",
          }
        }}
      >
        <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header with Close */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{ width: 44, height: 44, borderRadius: 2 }}
              />
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
                Menu
              </Typography>
            </Stack>
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              sx={{ color: "#fff", minWidth: 44, minHeight: 44 }}
            >
              <CloseRounded />
            </IconButton>
          </Stack>

          {/* Phone Number - Prominent */}
          <Box
            component="a"
            href="tel:4168229741"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 2,
              mb: 3,
              borderRadius: 2,
              bgcolor: "rgba(240, 122, 43, 0.15)",
              border: "1px solid rgba(240, 122, 43, 0.3)",
              color: "#f07a2b",
              textDecoration: "none",
              minHeight: 56
            }}
          >
            <PhoneRounded />
            <Box>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", display: "block" }}>
                Call us now
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                (416) 822-9741
              </Typography>
            </Box>
          </Box>

          {/* Main Nav */}
          <Stack spacing={0.5} sx={{ mb: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  color: "#fff",
                  fontSize: "1.1rem",
                  py: 1.8,
                  px: 2,
                  borderRadius: 2,
                  minHeight: 52,
                  "&:hover, &:active": {
                    bgcolor: "rgba(240, 122, 43, 0.1)"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Service Quick Links */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.5)", px: 2, mb: 1, display: "block" }}>
              Popular Services
            </Typography>
            <Stack spacing={0.5}>
              {[
                { label: "Snow Removal", href: "/services/snow-removal" },
                { label: "Contractor Services", href: "/services/contractor-services" },
                { label: "Flooring", href: "/services/flooring-installation" }
              ].map((service) => (
                <Button
                  key={service.label}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.95rem",
                    py: 1.2,
                    px: 2,
                    borderRadius: 2,
                    minHeight: 44,
                    "&:hover, &:active": {
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#fff"
                    }
                  }}
                >
                  {service.label}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* CTA Button */}
          <Button
            variant="contained"
            href="/#estimate"
            fullWidth
            onClick={() => setMobileMenuOpen(false)}
            startIcon={<CalendarMonthRounded />}
            sx={{
              bgcolor: "#f07a2b",
              color: "#fff",
              py: 2,
              fontWeight: 700,
              minHeight: 56,
              mb: 2,
              "&:hover": { bgcolor: "#d9651f" }
            }}
          >
            Request Service
          </Button>

          {/* Social Links */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              { label: "Instagram", href: "https://instagram.com/urbanhomeheroes" },
              { label: "Facebook", href: "#" }
            ].map((social) => (
              <Button
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.8rem",
                  minHeight: 44,
                  "&:hover": { color: "#fff" }
                }}
              >
                {social.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>

      {/* CSS for snowflake spin animation */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
