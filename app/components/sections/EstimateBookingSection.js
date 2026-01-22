"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function EstimateBookingSection() {
  const [serviceType, setServiceType] = useState("");
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="estimate"
      className="reveal"
      sx={{
        py: { xs: 6, md: 9 },
        background: "linear-gradient(120deg, rgba(240, 122, 43, 0.06), rgba(248, 244, 239, 0.9))"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
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
                  boxShadow: theme.customShadows.medium,
                  border: "2px solid rgba(240, 122, 43, 0.1)",
                  flexShrink: 0
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "#0e2740"
                }}
              >
                Get an Instant Quote
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ color: "#6a6f75", mb: 3 }}>
              Tell us what you need and we will follow up quickly with a fair estimate.
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Emergency and same-day available",
                "Photo upload optional",
                "No obligation estimates"
              ].map((item) => (
                <Stack direction="row" spacing={1.5} alignItems="center" key={item}>
                  <CheckCircleRounded sx={{ color: "#f07a2b", fontSize: "1.1rem" }} />
                  <Typography sx={{ color: "#0e2740", fontWeight: 600 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: { xs: 4, md: 5 },
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                boxShadow: theme.customShadows.large,
                border: "1px solid rgba(240, 122, 43, 0.15)"
              }}
            >
              <Stack spacing={3} component="form">
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#0e2740", mb: 1 }}>
                  Request a Service
                </Typography>
                <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2 }}>
                  Simply complete the form below with your information and explain how our contractor service professionals can assist you. You may upload images (up to three) of your project.
                </Typography>
                <TextField
                  label="Full name"
                  placeholder="Jane Doe"
                  fullWidth
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 1)",
                        "& fieldset": {
                          borderColor: "#f07a2b",
                          borderWidth: "2px"
                        }
                      },
                      "&.Mui-focused": {
                        bgcolor: "rgba(255, 255, 255, 1)",
                        "& fieldset": {
                          borderColor: "#f07a2b",
                          borderWidth: "2px",
                          boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`
                        }
                      }
                    }
                  }}
                />
                <TextField
                  label="Postal code"
                  placeholder="M4B 1B3"
                  fullWidth
                  required
                />
                <FormControl fullWidth required>
                  <InputLabel 
                    id="service-type-label"
                    sx={{
                      "&.Mui-focused": {
                        color: "#f07a2b"
                      }
                    }}
                  >
                    Service type
                  </InputLabel>
                  <Select
                    labelId="service-type-label"
                    id="service-type-select"
                    value={serviceType}
                    label="Service type"
                    onChange={(e) => setServiceType(e.target.value)}
                    sx={{
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      transition: "all 0.3s ease",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)"
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f07a2b",
                        borderWidth: "2px"
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f07a2b",
                        borderWidth: "2px",
                          boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`
                      },
                      "& .MuiSelect-select": {
                        padding: "16.5px 14px",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "center"
                      },
                      "& .MuiSelect-icon": {
                        color: "#f07a2b",
                        right: 12
                      }
                    }}
                    inputProps={{
                      "aria-label": "Service type"
                    }}
                  >
                    <MenuItem value="" disabled sx={{ display: "none" }}>
                      Select a service
                    </MenuItem>
                    <MenuItem value="Interior Repair">Interior Repair</MenuItem>
                    <MenuItem value="Exterior Repair">Exterior Repair</MenuItem>
                    <MenuItem value="Flooring Installation & Repair">Flooring Installation & Repair</MenuItem>
                    <MenuItem value="Plumbing Services">Plumbing Services</MenuItem>
                    <MenuItem value="Lighting & Electrical">Lighting & Electrical</MenuItem>
                    <MenuItem value="Carpentry, Fences & Decks">Carpentry, Fences & Decks</MenuItem>
                    <MenuItem value="Painting & Drywall">Painting & Drywall</MenuItem>
                    <MenuItem value="Doors & Windows">Doors & Windows</MenuItem>
                    <MenuItem value="Home Maintenance & Seasonal">Home Maintenance & Seasonal</MenuItem>
                    <MenuItem value="Safety & Mobility Services">Safety & Mobility Services</MenuItem>
                    <MenuItem value="Assembly & Installation">Assembly & Installation</MenuItem>
                    <MenuItem value="Commercial Services">Commercial Services</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  type="file"
                  label="Optional photos (up to 3)"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  inputProps={{ multiple: true, accept: "image/*" }}
                  helperText="Upload photos to help us understand your project better"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 1)"
                      }
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="btn-modern"
                  sx={{
                    bgcolor: "#f07a2b",
                    color: "#ffffff",
                    py: 2,
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    borderRadius: 2,
                    boxShadow: theme.customShadows.buttonPrimary,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      bgcolor: "#d9651f",
                      transform: "translateY(-3px) scale(1.02)",
                      boxShadow: theme.customShadows.buttonPrimaryHover
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 0,
                      height: 0,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.2)",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.6s, height 0.6s"
                    },
                    "&:hover::before": {
                      width: 400,
                      height: 400
                    }
                  }}
                >
                  Request a Quote
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
