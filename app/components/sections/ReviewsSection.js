"use client";

import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import StarRounded from "@mui/icons-material/StarRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

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

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function ReviewsSection() {
  return (
    <Box
      component="section"
      id="reviews"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={8} alignItems="center">
          <Typography variant="overline" sx={eyebrowStyle}>
            CLIENT REVIEWS
          </Typography>
          <Typography variant="h2" sx={headingStyle}>
            What Our Clients Say
          </Typography>
          <Box sx={sectionDivider} />
          <Typography variant="body1" sx={sectionBodyStyle}>
            Real feedback from homeowners who trust Urban Home Heroes.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(15, 38, 68, 0.08)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
                  }
                }}
              >
                <Stack spacing={2}>
                  {/* Star Rating */}
                  <Stack direction="row" spacing={0.5}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarRounded
                        key={i}
                        sx={{
                          color: "#f7a24d",
                          fontSize: "1.5rem"
                        }}
                      />
                    ))}
                  </Stack>

                  {/* Review Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "#0e2740",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      fontWeight: 500
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  {/* Author */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#6a6f75",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    — {review.author}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
