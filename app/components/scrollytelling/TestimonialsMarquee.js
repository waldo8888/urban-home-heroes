"use client";

import { Box, Card, Typography, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";

const reviews = [
    { name: "Sarah J.", text: "Saved us during the storm! They were the only ones who answered.", rating: 5 },
    { name: "Michael T.", text: "The renovation work is flawless. Kitchen looks like a magazine.", rating: 5 },
    { name: "David L.", text: "Professional, clean, and on time. Highly recommend for any repairs.", rating: 5 },
    { name: "Emma W.", text: "Best contractor experience I've had in Vaughan.", rating: 5 },
    { name: "James K.", text: "Fixed my plumbing emergency in 2 hours flat. Heroes Indeed.", rating: 5 },
    { name: "Linda M.", text: "Honest pricing and great communication throughout.", rating: 5 },
];

export default function TestimonialsMarquee() {
    return (
        <Box
            component="section"
            sx={{
                py: 15,
                bgcolor: "#f8f4ef",
                overflow: "hidden",
                position: "relative"
            }}
        >
            <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em" }}>
                    Social Proof
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: "#0e2740" }}>
                    Neighbours love us.
                </Typography>
            </Box>

            {/* Marquee Wrapper */}
            <Box
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    width: "100%",
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
            >
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    style={{ display: "flex", gap: "2rem", width: "max-content", paddingLeft: "2rem" }}
                >
                    {/* Duplicate reviews for seamless loop */}
                    {[...reviews, ...reviews, ...reviews].map((review, i) => (
                        <Card
                            key={i}
                            elevation={0}
                            sx={{
                                p: 4,
                                width: "350px",
                                flexShrink: 0,
                                borderRadius: 4,
                                bgcolor: "#ffffff",
                                border: "1px solid rgba(0,0,0,0.05)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.05)"
                            }}
                        >
                            <Rating value={review.rating} readOnly sx={{ color: "#f07a2b", mb: 2 }} />
                            <Typography variant="body1" sx={{ color: "#0e2740", fontStyle: "italic", mb: 3, minHeight: "3em" }}>
                                "{review.text}"
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Avatar sx={{ bgcolor: "#0e2740" }}>{review.name[0]}</Avatar>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                    {review.name}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}
