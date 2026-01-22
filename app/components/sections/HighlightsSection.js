"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { eyebrowStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const highlights = [
  "Insured contractor",
  "Transparent pricing",
  "Quality workmanship",
  "Senior discounts available",
  "No job too small"
];

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function HighlightsSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="highlights"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={4} sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#0e2740",
              textAlign: "center"
            }}
          >
            Special Notes &{" "}
            <Box component="span" sx={{ color: "#f07a2b" }}>
              Highlights
            </Box>
          </Typography>
          <Box sx={sectionDivider} />
          <Typography 
            variant="body1" 
            sx={{ 
              ...sectionBodyStyle, 
              maxWidth: "100%",
              width: "100%",
              textAlign: "center",
              display: "block"
            }}
          >
            We show up ready for the details that matter most.
          </Typography>
        </Stack>
        <Grid container spacing={3} className="stagger" sx={{ justifyContent: "center" }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={highlight} style={{ "--i": index }}>
              <Box
                sx={{
                  background: "linear-gradient(135deg, #f07a2b 0%, #f7a24d 50%, #0e2740 100%)",
                  color: "#ffffff",
                  p: 3.5,
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: theme.customShadows.buttonPrimary,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.05)",
                    boxShadow: theme.customShadows.buttonPrimaryHover,
                    "&::before": {
                      left: "100%"
                    }
                  }
                }}
              >
                {highlight}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
