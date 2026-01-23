"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import StarRounded from "@mui/icons-material/StarRounded";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const reviews = [
  {
    rating: 5,
    text: "Fast, reliable snow removal — arrived before sunrise!",
    author: "Client"
  },
  {
    rating: 5,
    text: "Professional service and clear pricing. Highly recommend!",
    author: "Client"
  },
  {
    rating: 5,
    text: "Same-day response when we needed it most. Great team!",
    author: "Client"
  }
];

export default function ReviewsSection() {
  return (
    <Box
      component="section"
      id="reviews"
      sx={{
        py: { xs: 8, md: 14 },
        position: "relative"
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} textAlign="center" mb={8} alignItems="center">
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.2em" }}>
            CLIENT REVIEWS
          </Typography>
          <Typography variant="h2" sx={{ color: "secondary.main", fontWeight: 700 }}>
            What Our Clients Say
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <GlassCard
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{ p: 4, height: "100%" }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" spacing={0.5}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarRounded
                        key={i}
                        sx={{
                          color: "#f07a2b", // Brand Orange
                          fontSize: "1.5rem",
                          filter: "drop-shadow(0 0 4px rgba(240, 122, 43, 0.4))"
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "text.primary",
                      fontStyle: "italic",
                      lineHeight: 1.6
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em"
                    }}
                  >
                    — {review.author}
                  </Typography>
                </Stack>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
