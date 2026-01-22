import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f07a2b"
    },
    secondary: {
      main: "#0e2740"
    },
    background: {
      default: "#f8f4ef",
      paper: "#ffffff"
    },
    text: {
      primary: "#1f2a37",
      secondary: "#6a6f75"
    }
  },
  typography: {
    fontFamily: "var(--font-manrope)",
    h1: {
      fontFamily: "var(--font-sora)",
      fontWeight: 700,
      letterSpacing: "-0.02em"
    },
    h2: {
      fontFamily: "var(--font-sora)",
      fontWeight: 700,
      letterSpacing: "-0.02em"
    },
    h3: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600,
      letterSpacing: "-0.02em"
    },
    h4: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600
    },
    h5: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600
    },
    h6: {
      fontFamily: "var(--font-sora)",
      fontWeight: 600
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.01em"
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          paddingInline: "1.5rem",
          fontWeight: 600,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        },
        contained: {
          boxShadow: "0 4px 14px rgba(240, 122, 43, 0.25)",
          "&:hover": {
            boxShadow: "0 6px 18px rgba(240, 122, 43, 0.35)",
            transform: "translateY(-2px)"
          }
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            transform: "translateY(-2px)"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(18, 38, 62, 0.08)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }
      }
    },
    MuiPaper: { // Cards and Accordions inherit from Paper
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.08)", // Default subtle shadow
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            transition: "all 0.3s ease",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f07a2b"
              }
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f07a2b",
                borderWidth: 2
              }
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(15, 38, 68, 0.08)",
          color: "#0e2740"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          "&:before": {
            display: "none"
          },
          "&.Mui-expanded": {
            margin: "16px 0"
          }
        }
      }
    }
  },
  customShadows: { // Custom shadows to be used where MuiPaper default is not enough
    soft: "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.08)",
    medium: "0px 6px 18px rgba(0, 0, 0, 0.1)",
    large: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    shadowPrimary: "0 6px 16px rgba(240, 122, 43, 0.12)",
    shadowPrimaryHover: "0 12px 28px rgba(240, 122, 43, 0.25)",
    buttonPrimary: "0 4px 14px rgba(240, 122, 43, 0.25)",
    buttonPrimaryHover: "0 6px 18px rgba(240, 122, 43, 0.35)",
    buttonGeneric: "0 8px 24px rgba(0, 0, 0, 0.2)", // New
    buttonGenericHover: "0 12px 32px rgba(0, 0, 0, 0.25)", // New
    buttonSecondary: "0 4px 14px rgba(14, 39, 64, 0.15)",
    buttonSecondaryHover: "0 6px 18px rgba(14, 39, 64, 0.2)",
  }
});

export default theme;
