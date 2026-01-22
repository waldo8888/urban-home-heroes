"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

// Instagram username (without @)
const INSTAGRAM_USERNAME = "urbanhomeheroes";

// Third-party widget options:
// Option 1: SnapWidget (Free) - Get widget code from https://snapwidget.com/
// Option 2: Elfsight (Free tier available) - Get widget code from https://elfsight.com/instagram-feed/
// Option 3: Juicer (Free tier available) - Get widget code from https://www.juicer.io/

// To use a third-party widget:
// 1. Sign up for a free account at one of the services above
// 2. Create an Instagram feed widget for @urbanhomeheroes
// 3. Copy the embed code/script they provide
// 4. Replace the WIDGET_SCRIPT_SRC below with the script src from the widget

// Example SnapWidget embed (replace with your actual widget ID):
// const WIDGET_SCRIPT_SRC = "https://snapwidget.com/js/snapwidget.js";
// const WIDGET_ID = "YOUR_WIDGET_ID"; // Get this from SnapWidget dashboard

// Example Elfsight embed (replace with your actual widget code):
// You'll get an HTML snippet like: <div class="elfsight-app-XXXXX"></div>
// Extract the widget ID from the class name

// For now, using SnapWidget public feed (no account needed for basic display)
const sectionSpacing = { py: { xs: 8, md: 12 } };

export default function InstagramFeedSection() {
  useEffect(() => {
    // Initialize Elfsight widgets after script loads
    if (window.Elfsight) {
      window.Elfsight.init();
    }
  }, []);

  return (
    <Box
      component="section"
      id="instagram"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#f8f4ef" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={6}>
          <Typography variant="overline" sx={eyebrowStyle}>
            FOLLOW US
          </Typography>
          <Typography variant="h2" sx={headingStyle}>
            See Our Work on Instagram
          </Typography>
          <Box sx={sectionDivider} />
          <Typography variant="body1" sx={sectionBodyStyle}>
            Check out our latest projects, before & after photos, and behind-the-scenes content.
          </Typography>
        </Stack>

        {/* Third-Party Instagram Widget Container */}
        {/* 
          SETUP INSTRUCTIONS:
          
          Option 1: Elfsight (Recommended - Free tier available)
          1. Go to https://elfsight.com/instagram-feed/
          2. Click "Get Widget for Free"
          3. Sign up for a free account
          4. Create a new Instagram Feed widget
          5. Enter username: urbanhomeheroes
          6. Customize the widget (layout, colors, etc.)
          7. Click "Get Code" and copy the widget ID (looks like: elfsight-app-XXXXX)
          8. Replace "YOUR_ELFSIGHT_WIDGET_ID" below with your widget ID
          
          Option 2: SnapWidget (Free)
          1. Go to https://snapwidget.com/
          2. Sign up for free account
          3. Create Instagram feed for @urbanhomeheroes
          4. Get embed code and use the iframe method below
        */}
        
        {/* Elfsight Widget - Replace YOUR_ELFSIGHT_WIDGET_ID with your actual widget ID */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
            border: "1px solid rgba(15, 38, 68, 0.08)",
            bgcolor: "#ffffff",
            p: 3,
            minHeight: 400
          }}
        >
          <div 
            className="elfsight-app-YOUR_ELFSIGHT_WIDGET_ID" 
            data-elfsight-app-lazy
            style={{ width: "100%", minHeight: 400 }}
          />
          <Script 
            src="https://static.elfsight.com/platform/platform.js" 
            strategy="lazyOnload"
            onLoad={() => {
              if (window.Elfsight) {
                window.Elfsight.init();
              }
            }}
          />
        </Box>

        {/* Alternative: SnapWidget iframe (uncomment and use if preferred) */}
        {/*
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
            border: "1px solid rgba(15, 38, 68, 0.08)",
            bgcolor: "#ffffff",
            minHeight: 400
          }}
        >
          <Box
            component="iframe"
            src={`https://snapwidget.com/embed/${INSTAGRAM_USERNAME}`}
            sx={{
              width: "100%",
              height: "600px",
              border: "none",
              borderRadius: 4
            }}
            title="Instagram Feed"
          />
        </Box>
        */}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="outlined"
            href="https://www.instagram.com/urbanhomeheroes"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Instagram />}
            sx={{
              borderColor: "#E4405F",
              color: "#E4405F",
              px: 4,
              py: 1.2,
              fontWeight: 700,
              "&:hover": {
                borderColor: "#C13584",
                bgcolor: "rgba(228, 64, 95, 0.08)"
              }
            }}
          >
            Follow @urbanhomeheroes on Instagram
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
