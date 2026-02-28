"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function SnowCtaStrip({
  message = "Need snow removal today?",
  callHref = "tel:4168229741",
  quoteHref = "/#estimate",
  callLabel = "Call Now",
  quoteLabel = "Get Snow Removal Quote",
  variant = "light"
}) {
  const isDark = variant === "dark";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: isDark ? "#0e2740" : "#f8f4ef",
        color: isDark ? "#ffffff" : "#0e2740",
        borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(14, 39, 64, 0.08)",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(14, 39, 64, 0.08)"
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: isDark ? "#ffffff" : "#0e2740"
            }}
          >
            {message}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant={isDark ? "contained" : "outlined"}
              href={callHref}
              sx={{
                borderColor: isDark ? "rgba(255,255,255,0.6)" : "#0e2740",
                color: isDark ? "#0e2740" : "#0e2740",
                bgcolor: isDark ? "#ffffff" : "transparent",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                "&:hover": {
                  borderColor: isDark ? "#ffffff" : "#0e2740",
                  bgcolor: isDark ? "#f8f8f8" : "rgba(14, 39, 64, 0.08)"
                }
              }}
            >
              {callLabel}
            </Button>
            <Button
              variant="contained"
              href={quoteHref}
              sx={{
                bgcolor: "#f07a2b",
                color: "#ffffff",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#d9651f",
                  transform: "translateY(-2px)"
                }
              }}
            >
              {quoteLabel}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
