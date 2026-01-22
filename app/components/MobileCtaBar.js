"use client";

import { Box, Button } from "@mui/material";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import RequestQuoteRounded from "@mui/icons-material/RequestQuoteRounded";

export default function MobileCtaBar({
  callHref = "tel:4168229741",
  quoteHref = "/#estimate",
  callLabel = "Call",
  quoteLabel = "Get Quote"
}) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(140deg, #0e2740, #142d50)",
        color: "#ffffff",
        display: { xs: "flex", md: "none" },
        zIndex: 1000,
        boxShadow: "0 -8px 24px rgba(15, 38, 68, 0.4)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)"
      }}
    >
      <Button
        component="a"
        href={callHref}
        sx={{
          flex: 1,
          color: "#ffffff",
          py: 2.5,
          fontWeight: 600,
          borderRadius: 0,
          borderRight: "1px solid rgba(255,255,255,0.2)",
          transition: "all 0.2s ease",
          whiteSpace: "normal",
          textAlign: "center",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.1)"
          }
        }}
        startIcon={<PhoneRounded />}
      >
        {callLabel}
      </Button>
      <Button
        component="a"
        href={quoteHref}
        sx={{
          flex: 1,
          color: "#ffffff",
          py: 2.5,
          fontWeight: 600,
          borderRadius: 0,
          transition: "all 0.2s ease",
          whiteSpace: "normal",
          textAlign: "center",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.1)"
          }
        }}
        startIcon={<RequestQuoteRounded />}
      >
        {quoteLabel}
      </Button>
    </Box>
  );
}
