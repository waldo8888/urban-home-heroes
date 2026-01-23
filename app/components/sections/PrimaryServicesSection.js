"use client";

import { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const primaryServices = [
  {
    title: "Contractor Services",
    description: "Licensed contractor support for small jobs and repairs."
  },
  {
    title: "Snow Removal",
    description: "Emergency snow removal near me and safe winter response."
  },
  {
    title: "Flooring Installation",
    description: "Vinyl and laminate done right."
  },
  {
    title: "Painting & Drywall",
    description: "Patch, prep, and paint with care."
  },
  {
    title: "Minor Plumbing & Electrical",
    description: "Fixtures, outlets, and safety checks."
  },
  {
    title: "Fence & Deck Repairs",
    description: "Fence repair service, deck repair service, and railing installation."
  },
  {
    title: "Appliance Installation",
    description: "Hook-ups and secure installations."
  },
  {
    title: "Junk Removal",
    description: "Clear the clutter in a single visit."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PrimaryServicesSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 8, md: 14 },
        position: "relative",
        zIndex: 1
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3} textAlign="center" mb={10} alignItems="center">
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.2em"
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "secondary.main",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #f07a2b, #0e2740)"
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              fontSize: "1.1rem"
            }}
          >
            Reliable home services from a licensed contractor team for every season.
          </Typography>
        </Stack>

        <Grid
          container
          spacing={3}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {primaryServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <GlassCard
                component={motion.div}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 12px 40px rgba(14, 39, 64, 0.1)",
                  borderColor: "rgba(14, 39, 64, 0.2)"
                }}
                sx={{
                  height: "100%",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      color: "rgba(14, 39, 64, 0.05)",
                      lineHeight: 1,
                      position: "absolute",
                      top: 20,
                      right: 20,
                      pointerEvents: "none"
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, rgba(240, 122, 43, 0.15), rgba(14, 39, 64, 0.05))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(14, 39, 64, 0.05)",
                      mb: 2
                    }}
                  >
                    <Typography variant="h6" color="primary" fontWeight={700}>
                      {service.title.charAt(0)}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </Stack>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" mt={8}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#estimate"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ px: 5, py: 1.5, fontSize: "1rem", color: "#fff" }}
          >
            Book Service
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/services"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ px: 5, py: 1.5, fontSize: "1rem", color: "secondary.main", borderColor: "rgba(14, 39, 64, 0.3)" }}
          >
            View All Services
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
