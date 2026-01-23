"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import AcUnitRounded from "@mui/icons-material/AcUnitRounded";
import { motion } from "framer-motion";

export default function InlineCTA({ variant = "primary" }) {
    // Alternate styles if needed in future, currently keeping one consistent high-contrast look
    const bgColor = variant === "primary" ? "#0e2740" : "#f07a2b";

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
                bgcolor: bgColor,
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Subtle Background Pattern */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            />

            <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 4, md: 8 }}
                    textAlign={{ xs: "center", md: "left" }}
                >
                    {/* Main Headline */}
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "#ffffff",
                                fontWeight: 800,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                                mb: 1
                            }}
                        >
                            Ready for a stress-free winter?
                        </Typography>
                        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)" }}>
                            Get your free automated quote instantly.
                        </Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
                            variant="contained"
                            href="tel:4168229741"
                            startIcon={<PhoneRounded />}
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                                bgcolor: "#ffffff",
                                color: "#0e2740",
                                py: 1.5,
                                px: 4,
                                fontSize: "1.1rem",
                                fontWeight: 800,
                                borderRadius: "50px",
                                "&:hover": { bgcolor: "#f5f5f5" }
                            }}
                        >
                            Call Now
                        </Button>

                        <Button
                            variant="contained"
                            href="#estimate"
                            startIcon={<AcUnitRounded />}
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                                bgcolor: "#f07a2b",
                                color: "#ffffff",
                                py: 1.5,
                                px: 4,
                                fontSize: "1.1rem",
                                fontWeight: 800,
                                borderRadius: "50px",
                                boxShadow: "0 8px 16px rgba(240, 122, 43, 0.4)",
                                "&:hover": { bgcolor: "#d9651f" }
                            }}
                        >
                            Get Snow Quote
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
