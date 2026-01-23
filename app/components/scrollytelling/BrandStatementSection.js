"use client";

import { useRef } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandStatementSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -50] : [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -100] : [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <Box
            component="section"
            ref={containerRef}
            sx={{
                py: { xs: 15, md: 30 },
                bgcolor: "#f8f4ef", // Matches global bg
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <motion.div style={{ opacity, y: y1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#f07a2b",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                mb: 3,
                                display: "block",
                            }}
                        >
                            The Promise
                        </Typography>
                    </motion.div>

                    <motion.div style={{ opacity, y: y2 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "5rem" },
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: "#0e2740",
                                maxWidth: "1000px",
                                mx: "auto",
                                mb: 4,
                            }}
                        >
                            Every home deserves a{" "}
                            <Box component="span" sx={{ color: "#f07a2b" }}>
                                hero
                            </Box>
                            .
                        </Typography>
                    </motion.div>

                    <motion.div
                        style={{ opacity }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: { xs: "1.2rem", md: "1.8rem" },
                                fontWeight: 500,
                                color: "rgba(14, 39, 64, 0.7)",
                                maxWidth: "800px",
                                mx: "auto",
                                lineHeight: 1.6,
                            }}
                        >
                            We bring **30 years of hands-on experience** to every job.
                            Owner-operated, reliable, and **senior & pet friendly**.
                            No subcontractors. No runarounds. Just honest work.
                        </Typography>
                    </motion.div>
                </Box>
            </Container>

            {/* Abstract Background Elements */}
            <Box
                component={motion.div}
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                sx={{
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                    width: "30vw",
                    height: "30vw",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(240, 122, 43, 0.05) 0%, transparent 70%)",
                    zIndex: 1,
                    filter: "blur(40px)",
                }}
            />
            <Box
                component={motion.div}
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "5%",
                    width: "40vw",
                    height: "40vw",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(14, 39, 64, 0.05) 0%, transparent 70%)",
                    zIndex: 1,
                    filter: "blur(60px)",
                }}
            />
        </Box>
    );
}
