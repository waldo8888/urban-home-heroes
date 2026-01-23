"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShieldIcon from "@mui/icons-material/Shield";
import StarIcon from "@mui/icons-material/Star";
import GppGoodIcon from "@mui/icons-material/GppGood";

const trustItems = [
    { icon: <VerifiedUserIcon />, label: "Licensed Contractor" },
    { icon: <ShieldIcon />, label: "$2M Liability Insurance" },
    { icon: <StarIcon />, label: "5-Star Google Rated" },
    { icon: <GppGoodIcon />, label: "Background Checked" },
    { icon: <VerifiedUserIcon />, label: "Same-Day Service" },
    { icon: <ShieldIcon />, label: "Family Owned" },
];

export default function TrustMarquee() {
    return (
        <Box
            component="section"
            sx={{
                py: 8,
                bgcolor: "#f07a2b", // Brand Orange for high contrast and to break up whitespace
                color: "#ffffff",
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
                mt: -1 // Overlap slightly to prevent hair-line gaps
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    spacing={8}
                    alignItems="center"
                    component={motion.div}
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                    sx={{ width: "max-content" }}
                >
                    {[...trustItems, ...trustItems, ...trustItems].map((item, i) => (
                        <Stack key={i} direction="row" spacing={1.5} alignItems="center" sx={{ whiteSpace: "nowrap" }}>
                            <Box sx={{ color: "rgba(255,255,255,0.8)" }}>{item.icon}</Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "1.1rem" }}>
                                {item.label}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
