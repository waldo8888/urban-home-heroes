"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

export default function MobileHeroNav() {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "sticky",
        top: 0,
        zIndex: 1000,
        bgcolor: "rgba(7, 12, 20, 0.95)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        py: 1.5,
        px: 2
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          maxWidth: "100%"
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            component="img"
            src="/urban-home-hero-logo.jpg"
            alt="Urban Home Heroes logo"
            sx={{
              width: 34,
              height: 34,
              bgcolor: "#ffffff",
              p: 0.4,
              borderRadius: 2
            }}
          />
          <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
            Urban Home Heroes
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          href="#estimate"
          sx={{
            borderColor: "rgba(255, 255, 255, 0.7)",
            color: "#ffffff",
            fontWeight: 600,
            px: 2,
            py: 0.75,
            borderRadius: "999px",
            fontSize: "0.85rem",
            "&:hover": { borderColor: "#ffffff", bgcolor: "rgba(255,255,255,0.12)" }
          }}
        >
          Request Same-Day Service
        </Button>
      </Stack>
    </Box>
  );
}
