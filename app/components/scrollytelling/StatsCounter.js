"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { value: 30, suffix: "+", label: "Years Experience", sub: "Combined Expertise" },
    { value: 500, suffix: "+", label: "Local Reviews", sub: "5-Star Average" },
    { value: 100, suffix: "%", label: "Owner Operated", sub: "No Subcontractors" },
    { value: 24, suffix: "/7", label: "Winter Support", sub: "Emergency Team" }
];

function Counter({ from, to, suffix }) {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;

        // Simple animation
        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing function for smooth count up
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(easeOutQuart * (to - from) + from);
            node.textContent = current + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, from, to, suffix]);

    return <span ref={nodeRef} />; // Need a span to target
}

export default function StatsCounter() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 10, md: 20 },
                bgcolor: "#0e2740",
                color: "#ffffff",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em" }}>
                                Why Us
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 3, color: "#ffffff", fontSize: { xs: "2rem", md: "3rem" } }}>
                                Numbers that define trust.
                            </Typography>
                            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: { xs: "100%", md: "400px" }, mx: { xs: "auto", md: 0 }, lineHeight: 1.8 }}>
                                We don't just promise quality; we measure it. Our commitment to excellence is backed by data and real customer experiences.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            {stats.map((stat, i) => (
                                <Grid item xs={6} sm={3} key={i}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: { xs: 2.5, md: 3 },
                                            borderRadius: 4,
                                            bgcolor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", mb: 1, fontSize: { xs: "1.75rem", md: "3rem" } }}>
                                            <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#f07a2b", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                                            {stat.label}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>
                                            {stat.sub}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
