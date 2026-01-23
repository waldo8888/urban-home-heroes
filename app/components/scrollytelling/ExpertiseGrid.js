"use client";

import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import HandymanIcon from "@mui/icons-material/Handyman";
import AcUnitRounded from "@mui/icons-material/AcUnitRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import ThermostatRounded from "@mui/icons-material/ThermostatRounded";
import LandscapeRounded from "@mui/icons-material/LandscapeRounded";
import DeckRounded from "@mui/icons-material/DeckRounded";
import FloodRounded from "@mui/icons-material/WaterDamageRounded";
import KitchenIcon from "@mui/icons-material/KitchenRounded";
import PlumbingIcon from "@mui/icons-material/PlumbingRounded";
import MeetingRoomRounded from "@mui/icons-material/MeetingRoomRounded";
import ElderlyRounded from "@mui/icons-material/ElderlyRounded";
import DeleteSweepRounded from "@mui/icons-material/DeleteSweepRounded";

const seasonalExpertise = [
    {
        season: "❄️ Winter Services",
        items: [
            { icon: <AcUnitRounded />, title: "Snow Removal", desc: "Plowing, Salting & Ice Management" },
            { icon: <WarningRounded />, title: "Emergency Repairs", desc: "24/7 Winter Response Team" },
            { icon: <ThermostatRounded />, title: "Heating Support", desc: "Draft proofing & Insulation" }
        ]
    },
    {
        season: "☀️ Spring / Summer",
        items: [
            { icon: <LandscapeRounded />, title: "Landscaping", desc: "Property maintenance & Cleanup" },
            { icon: <DeckRounded />, title: "Fences & Decks", desc: "Repair, Staining & Installation" },
            { icon: <FloodRounded />, title: "Basement Reno", desc: "Post-flood restoration experts" }
        ]
    },
    {
        season: "🏡 Year-Round Services",
        items: [
            { icon: <HandymanIcon />, title: "Handyman", desc: "Mounting, Assembly & Fixes" },
            { icon: <FormatPaintIcon />, title: "Painting", desc: "Interior, Drywall & Framing" },
            { icon: <KitchenIcon />, title: "Renovations", desc: "Kitchens & Bathrooms" },
            { icon: <PlumbingIcon />, title: "Plumbing", desc: "Faucets, Toilets & Leaks" },
            { icon: <ElectricalServicesIcon />, title: "Electrical", desc: "Fixtures, GFCIs & Fans" },
            { icon: <MeetingRoomRounded />, title: "Doors & Windows", desc: "Locks, Repairs & Installs" },
            { icon: <ConstructionIcon />, title: "Flooring", desc: "Vinyl, Laminate & Tile" },
            { icon: <ElderlyRounded />, title: "Senior Living", desc: "Accessibility upgrades" },
            { icon: <DeleteSweepRounded />, title: "Junk Removal", desc: "Haul-away & decluttering" }
        ]
    }
];

export default function ExpertiseGrid() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 10, md: 15 },
                bgcolor: "#ffffff",
                position: "relative"
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.2em" }}>
                        Full Expertise
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: "#0e2740", mt: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
                        All Seasons. One Number.
                    </Typography>
                </Box>

                {seasonalExpertise.map((group, groupIndex) => (
                    <Box key={groupIndex} sx={{ mb: 8 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#0e2740",
                                fontWeight: 800,
                                mb: 4,
                                borderLeft: "4px solid #f07a2b",
                                pl: 2
                            }}
                        >
                            {group.season}
                        </Typography>
                        <Grid container spacing={3}>
                            {group.items.map((item, i) => (
                                <Grid item xs={6} md={4} key={i}>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        sx={{
                                            p: { xs: 2.5, md: 3 },
                                            height: "100%",
                                            borderRadius: 4,
                                            bgcolor: "#f8f4ef",
                                            border: "1px solid rgba(0,0,0,0.05)",
                                            display: "flex",
                                            alignItems: "center",
                                            textAlign: "left",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                bgcolor: "rgba(240,122,43,0.05)",
                                                borderColor: "#f07a2b",
                                                transform: "translateY(-4px)",
                                                boxShadow: "0 12px 24px rgba(0,0,0,0.05)"
                                            }
                                        }}
                                    >
                                        <Box sx={{ color: "#f07a2b", mr: 2, display: "flex", "& svg": { fontSize: "2rem" } }}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0e2740", lineHeight: 1.2 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: "text.secondary", lineHeight: 1.2, display: "block", mt: 0.5 }}>
                                                {item.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>
        </Box>
    );
}
