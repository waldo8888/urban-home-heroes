"use client";

import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import BoltIcon from "@mui/icons-material/Bolt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const steps = [
    {
        icon: <SearchIcon sx={{ fontSize: "2.5rem" }} />,
        title: "Request a Hero",
        desc: "Send us a photo or description. We'll give you a clear, honest quote in minutes.",
        step: "01"
    },
    {
        icon: <BoltIcon sx={{ fontSize: "2.5rem" }} />,
        title: "Rapid Deployment",
        desc: "Our heroes arrive on-site with the right tools and a plan to fix it properly.",
        step: "02"
    },
    {
        icon: <SentimentVerySatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
        title: "Mission Complete",
        desc: "Quality verified. Worksite cleaned. You get back to your day with a smile.",
        step: "03"
    }
];

export default function ProcessSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 15, md: 25 },
                bgcolor: "#ffffff",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={2} sx={{ textAlign: "center", mb: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#f07a2b",
                            fontWeight: 700,
                            letterSpacing: "0.2em"
                        }}
                    >
                        The Hero's Journey
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: "#0e2740",
                            fontSize: { xs: "2.5rem", md: "4rem" }
                        }}
                    >
                        Simple. Fast. Reliable.
                    </Typography>
                </Stack>

                <Grid container spacing={6}>
                    {steps.map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                sx={{
                                    textAlign: "center",
                                    height: "100%",
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: "#f8f4ef",
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    position: "relative",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 20,
                                        right: 30,
                                        fontSize: "4rem",
                                        fontWeight: 900,
                                        color: "rgba(240, 122, 43, 0.1)",
                                        lineHeight: 1
                                    }}
                                >
                                    {item.step}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "inline-flex",
                                        p: 2,
                                        borderRadius: "50%",
                                        bgcolor: "rgba(240, 122, 43, 0.1)",
                                        color: "#f07a2b",
                                        mb: 4
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: "#0e2740" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
