"use client";

import { Box, Button, Container, Grid, TextField, Typography, Stack } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { motion } from "framer-motion";

export default function FullScreenCTA() {
    return (
        <Box
            component="section"
            id="estimate"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                bgcolor: "#0e2740",
                color: "#ffffff",
                position: "relative",
                overflow: "hidden",
                py: 10
            }}
        >
            {/* Background blobs */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-20%",
                    left: "-10%",
                    width: "50vw",
                    height: "50vw",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(240, 122, 43, 0.1) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em", mb: 2, display: "block" }}>
                                Let's Get Started
                            </Typography>
                            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.5rem", md: "5rem" }, lineHeight: 1.1, mb: 4, color: "#ffffff" }}>
                                Ready for a home upgrade?
                            </Typography>
                            <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: { xs: "100%", md: "500px" }, mx: { xs: "auto", md: 0 }, mb: 6, fontSize: { xs: "1.1rem", md: "1.5rem" } }}>
                                From emergency fixes to dream renovations, we're ready to help. Get your free estimate today.
                            </Typography>

                            <Stack direction="row" spacing={4} justifyContent={{ xs: "center", md: "flex-start" }}>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#f07a2b", fontSize: { xs: "1.75rem", md: "2.125rem" } }}>4.9/5</Typography>
                                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>Average Rating</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#f07a2b", fontSize: { xs: "1.75rem", md: "2.125rem" } }}>1hr</Typography>
                                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>Response Time</Typography>
                                </Box>
                            </Stack>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box
                                component="form"
                                sx={{
                                    bgcolor: "#ffffff",
                                    p: { xs: 4, md: 6 },
                                    borderRadius: 4,
                                    boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
                                    color: "#0e2740"
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                                    Get an Estimate
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                                    Fill out the form below and we'll get back to you within an hour.
                                </Typography>

                                <Stack spacing={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="First Name" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="Last Name" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <TextField fullWidth label="Phone Number" variant="outlined" />
                                    <TextField fullWidth label="Service Needed" select SelectProps={{ native: true }} variant="outlined">
                                        <option value="">Select a service...</option>
                                        <option value="snow">Snow Removal</option>
                                        <option value="reno">Renovations</option>
                                        <option value="repair">Handyman Repairs</option>
                                        <option value="flooring">Flooring</option>
                                        <option value="other">Other</option>
                                    </TextField>
                                    <TextField fullWidth label="Project Details" multiline rows={4} variant="outlined" />

                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForwardRounded />}
                                        sx={{
                                            bgcolor: "#f07a2b",
                                            color: "#fff",
                                            py: 2,
                                            fontWeight: 700,
                                            "&:hover": { bgcolor: "#d9651f" }
                                        }}
                                    >
                                        Submit Request
                                    </Button>
                                </Stack>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
