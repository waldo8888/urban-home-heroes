"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";

const heroTrustTags = ["Insured contractor", "Local family business", "No job too small"];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" }
];

const heroVideos = [
  "/13261744_3840_2160_24fps.mp4",
  "/6007424-uhd_4096_2160_24fps.mp4",
  "/8964293-uhd_3840_2160_25fps.mp4"
];

export default function HeroSection() {
  const theme = useTheme();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      // Rotate to next video when current one ends
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    };

    video.addEventListener("ended", handleVideoEnd);
    
    // Load the current video
    video.load();

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex]);

  return (
    <Box
      component="section"
      className="reveal"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100%",
        overflow: "hidden"
      }}
    >
      {/* Background Video - Rotates through all 3 videos */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1800&q=80"
        key={currentVideoIndex}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          transition: "opacity 0.5s ease-in-out"
        }}
      >
        <source
          src={heroVideos[currentVideoIndex]}
          type="video/mp4"
        />
      </Box>
      
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(14, 39, 64, 0.9) 0%, rgba(14, 39, 64, 0.75) 45%, rgba(14, 39, 64, 0.2) 100%)",
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 2
        }}
      >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.25 },
              borderRadius: "999px",
              background: "rgba(7, 12, 20, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(14px)"
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                component="img"
                src="/urban-home-hero-logo.jpg"
                alt="Urban Home Heroes logo"
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: "#ffffff",
                  p: 0.4,
                  borderRadius: 2
                }}
              />
              <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
                Urban Home Heroes
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontWeight: 500,
                    px: 1.5,
                    "&:hover": { color: "#ffffff", bgcolor: "transparent" }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Button
              variant="outlined"
              href="#estimate"
              sx={{
                borderColor: "rgba(255, 255, 255, 0.7)",
                color: "#ffffff",
                fontWeight: 600,
                px: 2.5,
                py: 0.75,
                borderRadius: "999px",
                display: { xs: "none", sm: "flex" },
                "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
              }}
            >
              Easy Online Booking
            </Button>
          </Stack>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{ width: "100%", pt: { xs: 10, md: 12 }, pb: { xs: 6, md: 10 } }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                color: "#ffffff",
                maxWidth: 520
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}
                >
                  Your Local Fix-It Hero
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.8rem", md: "4rem" },
                    fontWeight: 700,
                    mb: 1,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em"
                  }}
                >
                  Reliable Contractor Services Near You
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.7
                  }}
                >
                  Busy homeowners, seniors, and families trust Urban Home Heroes for fast, honest, and professional home repairs with transparent pricing and quality workmanship.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    href="#estimate"
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#0e2740",
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: theme.customShadows.buttonGeneric,
                      "&:hover": {
                        bgcolor: "#f8f8f8",
                        transform: "translateY(-2px)",
                        boxShadow: theme.customShadows.buttonGenericHover
                      }
                    }}
                  >
                    Get a Free Estimate
                  </Button>
                  <Button
                    variant="outlined"
                    href="tel:4168229741"
                    sx={{
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      borderWidth: 2,
                      color: "#ffffff",
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      "&:hover": {
                        borderColor: "#ffffff",
                        bgcolor: "rgba(255,255,255,0.12)",
                        transform: "translateY(-2px)"
                      }
                    }}
                  >
                    Call Now
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1.5, pt: 1 }}>
                  {heroTrustTags.map((tag) => (
                    <Stack key={tag} direction="row" spacing={1} alignItems="center">
                      <CheckCircleRounded sx={{ color: "#f07a2b", fontSize: "1rem" }} />
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                        {tag}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
