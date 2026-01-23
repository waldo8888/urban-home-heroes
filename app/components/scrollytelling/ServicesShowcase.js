"use client";

import { useRef } from "react";
import { Box, Container, Stack, Typography, Card, CardContent, Button, useMediaQuery, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";

const services = [
    {
        title: "Snow Removal",
        subtitle: "Commercial & Residential",
        desc: "24/7 automated dispatch when snow hits 5cm. Sleep soundly while we clear the way.",
        color: "#e3f2fd",
        img: "/generated/service-snow.png"
    },
    {
        title: "Renovations",
        subtitle: "Kitchens, Bathrooms & Basements",
        desc: "Full-scale transformations managed by certified project managers.",
        color: "#fff3e0",
        img: "/generated/service-renovation.png"
    },
    {
        title: "Handyman Repairs",
        subtitle: "Fix-It Services",
        desc: "From leaky faucets to drywall patches. No job is too small for a hero.",
        color: "#f3e5f5",
        img: "/generated/service-handyman.png"
    },
    {
        title: "Flooring",
        subtitle: "Hardwood, Vinyl & Tile",
        desc: "Expert installation with laser-precision leveling and premium materials.",
        color: "#e8f5e9",
        img: "/generated/service-flooring.png"
    }
];

export default function ServicesShowcase() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"]
    });

    // Start earlier (0.1) and last almost until the very end (0.95)
    // This removes the "dead space" after the carousel stops.
    const x = useTransform(scrollYProgress, [0.6, 0.95], ["0%", "-88%"]);

    // Fade in bg text earlier
    const bgOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    if (isMobile) {
        return (
            <Box component="section" sx={{ py: 10, bgcolor: "#ffffff" }}>
                <Container>
                    <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em", mb: 2, display: "block" }}>
                        What We Do
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: "2.5rem", fontWeight: 800, color: "#0e2740", mb: 4 }}>
                        Craftsmanship at every scale.
                    </Typography>

                    <Stack spacing={3}>
                        {services.map((service, i) => (
                            <ServiceCard key={i} service={service} />
                        ))}
                        {/* Mobile 'View All' CTA */}
                        <Box sx={{ p: 4, bgcolor: "#0e2740", borderRadius: 4, color: "#fff", textAlign: "center" }}>
                            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "#ffffff" }}>And much more.</Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>
                                Plumbing, Electrical, Drywall and more.
                            </Typography>
                            <Button variant="contained" href="/services" fullWidth sx={{ bgcolor: "#f07a2b", fontWeight: 700 }}>
                                View All Services
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            component="section"
            ref={targetRef}
            sx={{
                height: "150vh", // Shorter height for a very tight, fast scroll
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    bgcolor: "#ffffff"
                }}
            >
                {/* Background decorative filler */}
                <Box
                    component={motion.div}
                    style={{ opacity: bgOpacity }}
                    sx={{
                        position: "absolute",
                        right: "-10%",
                        bottom: "-20%",
                        fontSize: "20rem",
                        fontWeight: 800,
                        color: "rgba(240, 122, 43, 0.05)",
                        whiteSpace: "nowrap",
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                >
                    SERVICES
                </Box>

                <Container maxWidth="xl" sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#f07a2b",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            mb: 2,
                            display: "block"
                        }}
                    >
                        What We Do
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            fontWeight: 800,
                            color: "#0e2740",
                            mb: 6,
                            maxWidth: "600px"
                        }}
                    >
                        Craftsmanship at every scale.
                    </Typography>

                    <Box sx={{ width: "100%" }}>
                        <motion.div style={{ x }} className="flex gap-8">
                            <Stack direction="row" spacing={4} sx={{ width: "max-content", px: 2 }}>
                                {services.map((service, i) => (
                                    <ServiceCard key={i} service={service} />
                                ))}
                                {/* Filler Card / CTA */}
                                <Box
                                    component={motion.div}
                                    whileHover={{ scale: 1.02 }}
                                    sx={{
                                        width: { xs: "85vw", md: "400px" },
                                        height: "500px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        bgcolor: "#0e2740",
                                        borderRadius: 4,
                                        color: "#ffffff"
                                    }}
                                >
                                    <Stack spacing={2} alignItems="center" textAlign="center" sx={{ p: 4 }}>
                                        <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffff" }}>
                                            And much more.
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                                            Plumbing, Electrical, Drywall...
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            href="/services"
                                            sx={{
                                                bgcolor: "#f07a2b",
                                                color: "#fff",
                                                fontWeight: 700,
                                                mt: 2,
                                                "&:hover": { bgcolor: "#d9651f" }
                                            }}
                                        >
                                            View All Services
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </motion.div>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

function ServiceCard({ service }) {
    return (
        <Box
            component={motion.div}
            whileHover={{ scale: 1.02, rotateY: 5, z: 50 }}
            sx={{
                width: { xs: "85vw", md: "400px" },
                height: "500px",
                perspective: "1000px",
            }}
        >
            <Card
                elevation={0}
                sx={{
                    height: "100%",
                    borderRadius: 4,
                    backgroundImage: `url(${service.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    border: "1px solid rgba(0,0,0,0.05)",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                        boxShadow: "0 24px 48px rgba(0,0,0,0.1)"
                    }
                }}
            >
                {/* Overlay for better text contrast if needed, though we use a glass card on top */}
                <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)" }} />
                <Box sx={{ p: 4, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", m: 2, borderRadius: 3, position: "relative", zIndex: 1 }}>
                    <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700 }}>
                        {service.subtitle}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: "#0e2740" }}>
                        {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                        {service.desc}
                    </Typography>
                    <Button
                        endIcon={<ArrowForwardRounded />}
                        sx={{
                            color: "#0e2740",
                            fontWeight: 700,
                            p: 0,
                            "&:hover": { bgcolor: "transparent", color: "#f07a2b" }
                        }}
                    >
                        Learn more
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}
