"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme
} from "@mui/material";

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function LocationFinderSection() {
  const [zipCode, setZipCode] = useState("");
  const theme = useTheme();

  return (
    <Box
      component="section"
      className="reveal"
      sx={{
        ...sectionSpacing,
        position: "relative",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { md: "fixed" }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, rgba(14, 39, 64, 0.88), rgba(240, 122, 43, 0.65))"
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      background: "linear-gradient(140deg, rgba(14, 39, 64, 0.9), rgba(240, 122, 43, 0.8))",
                      p: { xs: 4, md: 6 },
                      color: "#ffffff",
                      textAlign: "center",
                      maxWidth: 800,
                      mx: "auto",
                      borderRadius: 3,
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={3}>
                      <Box
                        component="img"
                        src="/urban-home-hero-logo.jpg"
                        alt="Urban Home Heroes logo"
                        sx={{
                          width: { xs: 56, md: 64 },
                          height: { xs: 56, md: 64 },
                          bgcolor: "#ffffff",
                          p: 0.8,
                          borderRadius: 2,
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                          border: "2px solid rgba(255, 255, 255, 0.3)"
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                        fontWeight: 700,
                        mb: 2,
                        color: "#ffffff"
                      }}
                    >
                      Find a Local Contractor Near You Today
                    </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
              Let us know how we can help you today. Enter your postal code to find local Urban Home Heroes contractor services.
            </Typography>
            <Stack spacing={2} sx={{ maxWidth: 600, mx: "auto" }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  value={zipCode}
                  onChange={(event) => setZipCode(event.target.value)}
                  placeholder="Enter Zip/Postal Code"
                  size="medium"
                  fullWidth
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      color: "#0e2740",
                      fontSize: "1rem",
                      py: 1
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)"
                    }
                  }}
                />
                <Button
                  variant="contained"
                  href="#service-areas"
                  sx={{
                    bgcolor: "#f07a2b",
                    color: "#ffffff",
                    px: 5,
                    py: 1.75,
                    fontWeight: 600,
                    borderRadius: 2,
                    fontSize: "1rem",
                    boxShadow: theme.customShadows.buttonPrimary,
                    "&:hover": {
                      bgcolor: "#d9651f",
                      transform: "translateY(-2px)",
                      boxShadow: theme.customShadows.buttonPrimaryHover
                    }
                  }}
                >
                  Find My Local Contractor
                </Button>
              </Stack>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", textAlign: "center", mt: 1 }}>
                Or call us at <Box component="span" sx={{ fontWeight: 600 }}>(416) 822-9741</Box>
              </Typography>
            </Stack>
        </Box>
      </Container>
    </Box>
  )
}
