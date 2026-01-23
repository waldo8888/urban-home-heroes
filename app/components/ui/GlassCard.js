import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassCard = styled(Card)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    // Touch-friendly: ensure minimum padding for tap targets
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2.5),
    },
    // Ensure buttons/links inside have enough space
    "& button, & a": {
        minHeight: 44, // iOS accessibility guideline
    },
    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 32px rgba(14, 39, 64, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.9)",
    },
    // On touch devices, use active state instead of hover
    "@media (hover: none)": {
        "&:hover": {
            transform: "none",
        },
        "&:active": {
            transform: "scale(0.98)",
            boxShadow: "0 8px 24px rgba(14, 39, 64, 0.1)",
        },
    },
}));

export default GlassCard;
