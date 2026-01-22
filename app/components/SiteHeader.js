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
  Typography
} from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/#resources" }
];

const drawerLinkSx = {
  justifyContent: "flex-start",
  color: "#0e2740",
  fontWeight: 600
};

export default function SiteHeader({ hideOnMobile = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!hideOnMobile) {
      // Always show if not hiding on mobile
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideOnMobile]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "linear-gradient(180deg, rgba(14, 39, 64, 0.98) 0%, rgba(14, 39, 64, 0.95) 100%)",
          color: "#ffffff",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          // Hide on both mobile and desktop at top, show when scrolled
          ...(hideOnMobile && {
            transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? "auto" : "none",
            visibility: isScrolled ? "visible" : "hidden"
          })
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: 1.5
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              component="a"
              href="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#ffffff",
                  p: 0.6,
                  borderRadius: 2,
                  boxShadow: "0 6px 16px rgba(18, 38, 62, 0.25)"
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    display: { xs: "none", sm: "block" },
                    lineHeight: 1.2
                  }}
                >
                  Urban Home Heroes
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em"
                  }}
                >
                  Your Local Fix-It Hero
                </Typography>
              </Box>
            </Stack>

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
                    color: "#ffffff",
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-1px)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Button
              variant="contained"
              href="/#estimate"
              sx={{
                bgcolor: "#f07a2b",
                color: "#ffffff",
                borderRadius: 2,
                px: 3.5,
                py: 1.2,
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(240, 122, 43, 0.3)",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "#d9651f",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(240, 122, 43, 0.4)"
                },
                display: { xs: "none", sm: "flex" }
              }}
            >
              Easy Online Booking
            </Button>

            <IconButton
              sx={{ color: "#ffffff", display: { md: "none" } }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuRounded sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            pt: 3
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
            <Box
              component="img"
              src="/urban-home-hero-logo.jpg"
              alt="Urban Home Heroes logo"
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#ffffff",
                p: 0.5,
                borderRadius: 2,
                boxShadow: "0 6px 16px rgba(18, 38, 62, 0.2)"
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#0e2740" }}>Urban Home Heroes</Typography>
              <Typography variant="caption" sx={{ color: "#6a6f75" }}>
                Local contractor team
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                sx={drawerLinkSx}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="/#estimate"
              onClick={() => setMobileMenuOpen(false)}
              sx={{ mt: 2 }}
            >
              Easy Online Booking
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
