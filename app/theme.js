import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f07a2b", // Brand Orange
      light: "#ff9d57",
      dark: "#b85800",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0e2740", // Brand Dark Blue
      light: "#374f6b",
      dark: "#00001b",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8f4ef", // Warm light grey/beige
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2a37",
      secondary: "#6a6f75",
    },
    success: {
      main: "#00A86B",
    },
    info: {
      main: "#0091FF",
    },
    error: {
      main: "#FF3B30",
    },
    warning: {
      main: "#FF9500",
    },
  },
  typography: {
    fontFamily: "var(--font-manrope)",
    h1: {
      fontFamily: "var(--font-sora)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "#0e2740", // Dark Blue for headings
    },
    h2: {
      fontFamily: "var(--font-sora)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#0e2740",
    },
    h3: {
      fontFamily: "var(--font-sora)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#0e2740",
    },
    h4: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600,
      color: "#0e2740",
    },
    h5: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600,
      color: "#0e2740",
    },
    h6: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600,
      color: "#0e2740",
    },
    button: {
      fontWeight: 700,
      textTransform: "capitalize", // Less aggressive than uppercase
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 8, // Much more subtle radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          transition: "all 0.2s ease",
          fontSize: "0.95rem",
          boxShadow: "none",
        },
        containedPrimary: {
          backgroundColor: "#f07a2b",
          boxShadow: "0 4px 14px rgba(240, 122, 43, 0.25)",
          "&:hover": {
            backgroundColor: "#d9651f",
            boxShadow: "0 6px 18px rgba(240, 122, 43, 0.35)",
            transform: "translateY(-1px)",
          },
        },
        containedSecondary: {
          backgroundColor: "#0e2740",
          boxShadow: "0 4px 14px rgba(14, 39, 64, 0.15)",
          "&:hover": {
            backgroundColor: "#162b3f",
            boxShadow: "0 6px 18px rgba(14, 39, 64, 0.25)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          borderColor: alpha("#0e2740", 0.2),
          "&:hover": {
            borderWidth: "1.5px",
            borderColor: "#0e2740",
            backgroundColor: alpha("#0e2740", 0.05),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.03)", // Subtle shadow
          border: "1px solid rgba(0,0,0,0.04)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.85)", // Light glass
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
          color: "#0e2740",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
  customShadows: {
    soft: "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.08)",
    medium: "0 8px 24px rgba(0, 0, 0, 0.08)",
    large: "0 12px 32px rgba(0, 0, 0, 0.12)",
    shadowPrimary: "0 6px 16px rgba(240, 122, 43, 0.12)",
    shadowPrimaryHover: "0 12px 28px rgba(240, 122, 43, 0.25)",
    buttonPrimary: "0 4px 14px rgba(240, 122, 43, 0.25)",
    buttonPrimaryHover: "0 6px 18px rgba(240, 122, 43, 0.35)",
    buttonGeneric: "0 8px 24px rgba(0, 0, 0, 0.08)",
    buttonGenericHover: "0 12px 32px rgba(0, 0, 0, 0.12)",
    buttonSecondary: "0 4px 14px rgba(14, 39, 64, 0.15)",
    buttonSecondaryHover: "0 6px 18px rgba(14, 39, 64, 0.2)",
  }
});

export default theme;
