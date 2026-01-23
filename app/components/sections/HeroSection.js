"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import { motion } from "framer-motion";

const heroVideos = [
  "/11297234-uhd_3840_2160_30fps.mp4",
  "/13261744_3840_2160_24fps.mp4",
  "/6007424-uhd_4096_2160_24fps.mp4"
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "100vh" }, // svh for mobile viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pb: { xs: 10, md: 0 } // Extra padding for mobile CTA bar
      }}
    >
      {/* Background Video - Plays on all devices */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        <Box
          component="video"
          key={heroVideos[currentVideoIndex]}
          src={heroVideos[currentVideoIndex]}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(14, 39, 64, 0.85) 0%, rgba(14, 39, 64, 0.75) 50%, rgba(14, 39, 64, 0.9) 100%)",
            zIndex: 1
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3 } }}>
        <Stack
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          textAlign="center"
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <Box
            component={motion.img}
            src="/urban-home-hero-logo.jpg"
            alt="Urban Home Heroes"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              width: { xs: 80, sm: 100, md: 130 },
              height: { xs: 80, sm: 100, md: 130 },
              borderRadius: 3,
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.4)",
              border: "3px solid rgba(255,255,255,0.2)"
            }}
          />

          {/* Eyebrow Badge */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: { xs: 2, md: 3 },
              py: 1,
              borderRadius: "30px",
              background: "rgba(240, 122, 43, 0.2)",
              border: "1px solid rgba(240, 122, 43, 0.4)",
              color: "#f07a2b",
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            }}
          >
            <StarRounded sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }} />
            GTA's #1 Snow Removal
          </Box>

          {/* Main Headline - Optimized for mobile */}
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "4rem", lg: "5rem" },
              fontWeight: 800,
              lineHeight: { xs: 1.15, md: 1.05 },
              color: "#ffffff",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              maxWidth: "900px",
              px: { xs: 1, md: 0 }
            }}
          >
            Snow Removal in{" "}
            <Box
              component="span"
              sx={{
                color: "#f07a2b",
                display: { xs: "inline", md: "block" }
              }}
            >
              Woodbridge & Vaughan
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="h5"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "700px",
              fontWeight: 500,
              lineHeight: 1.5,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.4rem" },
              px: { xs: 1, md: 0 }
            }}
          >
            Professional Driveway Clearing — Fast, Reliable, Same-Day Service
          </Typography>

          {/* Trust Badges - Horizontal scroll on mobile */}
          <Stack
            direction="row"
            spacing={1.5}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            sx={{
              flexWrap: { xs: "nowrap", sm: "wrap" },
              justifyContent: "center",
              overflowX: { xs: "auto", sm: "visible" },
              width: "100%",
              pb: { xs: 1, sm: 0 },
              px: { xs: 1, sm: 0 },
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none"
            }}
          >
            {["Licensed & Insured", "Same-Day Response", "500+ Reviews"].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: { xs: 1.5, md: 2 },
                  py: { xs: 0.6, md: 0.8 },
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: { xs: "0.75rem", md: "0.9rem" },
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  minHeight: 44 // Touch-friendly
                }}
              >
                <CheckCircleRounded sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, color: "#f07a2b" }} />
                {item}
              </Box>
            ))}
          </Stack>

          {/* CTA Buttons - Touch-friendly sizing */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" }, px: { xs: 2, sm: 0 } }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              size="large"
              href="#estimate"
              endIcon={<ArrowForwardRounded />}
              sx={{
                bgcolor: "#f07a2b",
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                py: { xs: 1.8, md: 2 },
                px: { xs: 4, md: 5 },
                fontWeight: 700,
                borderRadius: 2,
                minHeight: 56, // Touch-friendly
                boxShadow: "0 8px 24px rgba(240, 122, 43, 0.4)",
                "&:hover": {
                  bgcolor: "#d9651f",
                  boxShadow: "0 12px 32px rgba(240, 122, 43, 0.5)"
                }
              }}
            >
              Get Instant Quote
            </Button>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              size="large"
              href="tel:4168229741"
              startIcon={<PhoneRounded />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                py: { xs: 1.8, md: 2 },
                px: { xs: 4, md: 5 },
                fontWeight: 700,
                borderRadius: 2,
                borderWidth: 2,
                minHeight: 56, // Touch-friendly
                "&:hover": {
                  borderColor: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderWidth: 2
                }
              }}
            >
              (416) 822-9741
            </Button>
          </Stack>

          {/* Scroll Indicator - Hidden on mobile */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
            sx={{
              pt: 4,
              color: "rgba(255,255,255,0.5)",
              display: { xs: "none", md: "block" }
            }}
          >
            <Typography variant="caption" sx={{ letterSpacing: "0.1em", fontWeight: 600 }}>
              SCROLL TO EXPLORE
            </Typography>
            <Box sx={{ mt: 1, mx: "auto", width: 24, height: 40, border: "2px solid rgba(255,255,255,0.3)", borderRadius: 12, position: "relative" }}>
              <Box
                component={motion.div}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                sx={{ width: 4, height: 8, bgcolor: "rgba(255,255,255,0.5)", borderRadius: 4, position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)" }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
