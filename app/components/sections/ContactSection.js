"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import Instagram from "@mui/icons-material/Instagram";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import RequestQuoteRounded from "@mui/icons-material/RequestQuoteRounded";

export default function ContactSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="contact"
      className="reveal"
      sx={{ 
        py: { xs: 6, md: 9 }, 
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(240, 122, 43, 0.3), transparent)"
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: "fadeInUp 0.6s ease-out",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)"
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                }
              }}
            >
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
                    border: "2px solid rgba(240, 122, 43, 0.1)"
                  }}
                />
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.8rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "#0e2740",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: 0,
                        width: 60,
                        height: 4,
                        borderRadius: 2,
                        background: "linear-gradient(90deg, #f07a2b, #f7a24d)"
                      }
                    }}
                  >
                    Contact{" "}
                    <Box component="span" sx={{ color: "#f07a2b" }}>
                      Urban Home Heroes
                    </Box>
                  </Typography>
                </Box>
              </Stack>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "#6a6f75", 
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.7
                }}
              >
                Call, email, or request a quote from our contractor team and we will respond quickly.
              </Typography>
            </Box>
            <Stack spacing={2.5}>
              {[
                {
                  icon: PhoneRounded,
                  title: "Phone",
                  items: [
                    { label: "416-822-9741", href: "tel:4168229741" },
                    { label: "437-536-5336", href: "tel:4375365336" }
                  ],
                  color: "#f07a2b",
                  delay: 0.1
                },
                {
                  icon: EmailRounded,
                  title: "Email",
                  items: [
                    { label: "urbanhomeheroes@gmail.com", href: "mailto:urbanhomeheroes@gmail.com" },
                    { label: "info@urbanhomeheroes.ca", href: "mailto:info@urbanhomeheroes.ca" }
                  ],
                  color: "#f07a2b",
                  delay: 0.2
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  items: [
                    { label: "@urbanhomeheroes", href: "https://instagram.com/urbanhomeheroes", external: true }
                  ],
                  color: "#E4405F",
                  delay: 0.3
                }
              ].map((contact, index) => (
                <Card
                  key={contact.title}
                  sx={{
                    p: 3,
                    border: "1px solid rgba(15, 38, 68, 0.08)",
                    boxShadow: theme.customShadows.soft, // Replace hardcoded shadow
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 1) 100%)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    animation: `slideInLeft 0.6s ease-out ${contact.delay}s both`,
                    "@keyframes slideInLeft": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-30px)"
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)"
                      }
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 4,
                      height: "100%",
                      background: `linear-gradient(180deg, ${contact.color}, ${contact.color}dd)`,
                      transform: "scaleY(0)",
                      transformOrigin: "top",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "&:hover": {
                      transform: "translateY(-6px) translateX(4px)",
                      boxShadow: theme.customShadows.medium, // Replace hardcoded shadow
                      "&::before": {
                        transform: "scaleY(1)"
                      },
                      "& .contact-icon": {
                        transform: "scale(1.15) rotate(5deg)",
                        color: contact.color
                      }
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Box
                      className="contact-icon"
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${contact.color}15, ${contact.color}25)`,
                        color: contact.color,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    >
                      <contact.icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: "#0e2740",
                        fontSize: "1.1rem"
                      }}
                    >
                      {contact.title}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    {contact.items.map((item) => (
                      <Button
                        key={item.label}
                        component="a"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        sx={{
                          justifyContent: "flex-start",
                          color: contact.color,
                          px: 0,
                          py: 1,
                          textTransform: "none",
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          borderRadius: 1.5,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: `${contact.color}08`,
                            transform: "translateX(4px)",
                            color: contact.color
                          }
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Stack>
                </Card>
              ))}
            </Stack>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              mt={4}
              sx={{
                animation: "fadeInUp 0.6s ease-out 0.4s both",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)"
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                }
              }}
            >
              <Button
                variant="contained"
                component="a"
                href="tel:4168229741"
                startIcon={<PhoneRounded />}
                sx={{
                  bgcolor: "#f07a2b",
                  color: "#ffffff",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                                    boxShadow: theme.customShadows.buttonPrimary,
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                      bgcolor: "#d9651f",
                                      transform: "translateY(-2px)",
                                      boxShadow: theme.customShadows.buttonPrimaryHover
                                    },                  "&:active": {
                    transform: "translateY(0)"
                  }
                }}
              >
                Call Now
              </Button>
              <Button
                variant="outlined"
                component="a"
                href="#estimate"
                startIcon={<RequestQuoteRounded />}
                sx={{
                  borderColor: "#f07a2b",
                  borderWidth: 2,
                  color: "#f07a2b",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderColor: "#d9651f",
                    bgcolor: "rgba(240, 122, 43, 0.08)",
                    transform: "translateY(-2px)",
                    boxShadow: theme.customShadows.buttonPrimaryHover
                  },
                  "&:active": {
                    transform: "translateY(0)"
                  }
                }}
              >
                Request a Quote
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                overflow: "hidden",
                borderRadius: 3,
                border: "1px solid rgba(15, 38, 68, 0.08)",
                boxShadow: theme.customShadows.medium, // Replace hardcoded shadow
                animation: "fadeInRight 0.8s ease-out 0.2s both",
                "@keyframes fadeInRight": {
                  from: {
                    opacity: 0,
                    transform: "translateX(30px)"
                  },
                  to: {
                    opacity: 1,
                    transform: "translateX(0)"
                  }
                },
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.customShadows.large // Replace hardcoded shadow
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(240, 122, 43, 0.05) 0%, transparent 100%)",
                    zIndex: 1,
                    pointerEvents: "none"
                  }
                }}
              >
                <Box
                  component="iframe"
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11522.355326669372!2d-79.4099125!3d43.6559998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d1af92bb55%3A0x6f3a6d6f1b1fa5f!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1722290920000!5m2!1sen!2sca"
                  sx={{ 
                    border: 0, 
                    width: "100%", 
                    minHeight: 400,
                    display: "block",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.02)"
                    }
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              <Box
                sx={{
                  p: 2.5,
                  textAlign: "center",
                  bgcolor: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                  color: "#6a6f75",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  borderTop: "1px solid rgba(15, 38, 68, 0.06)"
                }}
              >
                <LocationOnRounded sx={{ fontSize: 20, color: "#f07a2b" }} />
                <Typography variant="body2">
                  Google reviews embed goes here once reviews are live.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
