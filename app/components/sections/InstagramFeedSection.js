"use client";

import { useEffect } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

// Instagram reel/post URLs
// To add more posts: Go to Instagram post → Three dots → Copy link → Paste here
const instagramPosts = [
  "https://www.instagram.com/reel/DTg2lptD4Kk/",
  "https://www.instagram.com/reel/DTQRXkdgMKJ/",
  "https://www.instagram.com/reel/DTQENBpAC5d/"
];

const sectionSpacing = { py: { xs: 8, md: 12 } };

export default function InstagramFeedSection() {
  useEffect(() => {
    // Load Instagram embed script
    const loadInstagramScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    };

    // Load script after component mounts
    const timeout = setTimeout(() => {
      loadInstagramScript();
      
      // Process embeds again after script loads
      setTimeout(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }, 1000);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
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

        {/* Instagram Posts Grid */}
        <Grid container spacing={3} justifyContent="center">
          {instagramPosts.map((postUrl, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                  border: "1px solid rgba(15, 38, 68, 0.08)",
                  bgcolor: "#ffffff",
                  minHeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "16px",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "calc(100% - 2px)"
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

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
