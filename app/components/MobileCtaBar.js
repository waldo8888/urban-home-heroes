"use client";

import { useState } from "react";
import { Box, Button, Fab, Stack, Typography, Zoom } from "@mui/material";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import RequestQuoteRounded from "@mui/icons-material/RequestQuoteRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import ChatRounded from "@mui/icons-material/ChatRounded";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCtaBar({
  callHref = "tel:4168229741",
  quoteHref = "/#estimate",
  callLabel = "Call Now",
  quoteLabel = "Get Quote"
}) {
  const [fabOpen, setFabOpen] = useState(false);

  const fabActions = [
    { icon: <PhoneRounded />, label: "Call", href: "tel:4168229741", color: "#25D366" },
    { icon: <EmailRounded />, label: "Email", href: "mailto:info@urbanhomeheroes.ca", color: "#0091FF" },
    { icon: <RequestQuoteRounded />, label: "Quote", href: "/#estimate", color: "#f07a2b" },
  ];

  return (
    <>
      {/* Enhanced Bottom CTA Bar */}
      <Box
        component={motion.div}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(135deg, #0e2740 0%, #1a3a52 100%)",
          color: "#ffffff",
          display: { xs: "flex", md: "none" },
          zIndex: 1000,
          boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.3)",
          borderTop: "2px solid rgba(240, 122, 43, 0.4)",
          backdropFilter: "blur(16px)",
          pb: "env(safe-area-inset-bottom)" // Safe area for notched phones
        }}
      >
        <Button
          component="a"
          href={callHref}
          sx={{
            flex: 1,
            color: "#ffffff",
            py: 2,
            fontWeight: 700,
            borderRadius: 0,
            borderRight: "1px solid rgba(255,255,255,0.1)",
            fontSize: "0.95rem",
            minHeight: 60,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            "&:hover, &:active": {
              bgcolor: "rgba(255,255,255,0.1)"
            }
          }}
        >
          <PhoneRounded sx={{ fontSize: "1.5rem" }} />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.02em" }}>
            {callLabel}
          </Typography>
        </Button>
        <Button
          component="a"
          href={quoteHref}
          sx={{
            flex: 1,
            bgcolor: "#f07a2b",
            color: "#ffffff",
            py: 2,
            fontWeight: 700,
            borderRadius: 0,
            fontSize: "0.95rem",
            minHeight: 60,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            "&:hover, &:active": {
              bgcolor: "#d9651f"
            }
          }}
        >
          <RequestQuoteRounded sx={{ fontSize: "1.5rem" }} />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.02em" }}>
            {quoteLabel}
          </Typography>
        </Button>
      </Box>

      {/* Floating Action Button (FAB) */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 24 }, // Above the bottom bar on mobile
          right: 16,
          zIndex: 1001,
          display: { xs: "block", md: "none" }
        }}
      >
        {/* FAB Actions */}
        <AnimatePresence>
          {fabOpen && (
            <Stack
              spacing={1.5}
              sx={{ position: "absolute", bottom: 70, right: 0, alignItems: "flex-end" }}
            >
              {fabActions.map((action, index) => (
                <Box
                  key={action.label}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(14, 39, 64, 0.95)",
                      color: "#fff",
                      px: 2,
                      py: 0.8,
                      borderRadius: 2,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                    }}
                  >
                    {action.label}
                  </Box>
                  <Fab
                    size="medium"
                    component="a"
                    href={action.href}
                    onClick={() => setFabOpen(false)}
                    sx={{
                      bgcolor: action.color,
                      color: "#fff",
                      boxShadow: `0 4px 16px ${action.color}50`,
                      "&:hover": {
                        bgcolor: action.color
                      }
                    }}
                  >
                    {action.icon}
                  </Fab>
                </Box>
              ))}
            </Stack>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <Fab
          onClick={() => setFabOpen(!fabOpen)}
          component={motion.button}
          whileTap={{ scale: 0.9 }}
          sx={{
            bgcolor: fabOpen ? "#0e2740" : "#f07a2b",
            color: "#fff",
            width: 60,
            height: 60,
            boxShadow: fabOpen
              ? "0 4px 20px rgba(14, 39, 64, 0.4)"
              : "0 4px 20px rgba(240, 122, 43, 0.5)",
            "&:hover": {
              bgcolor: fabOpen ? "#1a3a52" : "#d9651f"
            }
          }}
        >
          <Box
            component={motion.div}
            animate={{ rotate: fabOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {fabOpen ? <CloseRounded sx={{ fontSize: "1.8rem" }} /> : <AddRounded sx={{ fontSize: "1.8rem" }} />}
          </Box>
        </Fab>
      </Box>
    </>
  );
}
