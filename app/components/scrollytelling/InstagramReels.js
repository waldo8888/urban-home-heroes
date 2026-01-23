"use client";

import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import Instagram from "@mui/icons-material/Instagram";

const reels = [
    {
        id: "DTpu_e4ADM8",
        title: "Kitchen Reveal",
    },
    {
        id: "DTg2lptD4Kk",
        title: "Blizzard Response",
    },
    {
        id: "DTQRXkdgMKJ",
        title: "Precision Matters",
    },
    {
        id: "DTQENBpAC5d",
        title: "Flooring Goals",
    }
];

export default function InstagramReels() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <Box
            component="section"
            ref={targetRef}
            sx={{
                py: { xs: 8, md: 15 },
                bgcolor: "#ffffff",
                overflow: "hidden"
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "flex-end" }}
                    mb={8}
                    spacing={3}
                >
                    <Box>
                        <Typography
                            variant="overline"
                            sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em", mb: 2, display: "block" }}
                        >
                            Social Proof
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                fontWeight: 800,
                                color: "#0e2740",
                                maxWidth: "600px",
                                lineHeight: 1.1
                            }}
                        >
                            Live from the job site.
                        </Typography>
                    </Box>
                    <IconButton
                        href="https://instagram.com/urbanhomeheroes"
                        target="_blank"
                        sx={{
                            border: "1px solid rgba(14, 39, 64, 0.1)",
                            borderRadius: "50px",
                            px: 3,
                            py: 1,
                            gap: 1,
                            "&:hover": { bgcolor: "#f07a2b", color: "white", borderColor: "#f07a2b" }
                        }}
                    >
                        <Instagram fontSize="small" />
                        <Typography variant="button" sx={{ fontWeight: 700, textTransform: "none" }}>
                            @UrbanHomeHeroes
                        </Typography>
                    </IconButton>
                </Stack>

                <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                        overflowX: "auto",
                        pb: 4,
                        width: "100%",
                        // Hide scrollbar
                        "&::-webkit-scrollbar": { display: "none" },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        px: { xs: 2, md: 0 }
                    }}
                >
                    {reels.map((reel, i) => (
                        <Box
                            key={reel.id}
                            component={motion.div}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            sx={{
                                flexShrink: 0,
                                width: { xs: "300px", md: "350px" }, // Slightly wider for embed
                                height: "600px", // Fixed height for vertical reels
                                borderRadius: 6,
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                bgcolor: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${reel.id}/embed`}
                                width="100%"
                                height="100%"
                                style={{ border: "none", borderRadius: "24px" }}
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                                title={reel.title}
                            />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
