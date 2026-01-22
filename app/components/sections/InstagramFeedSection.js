"use client";

import { useEffect, useState } from "react";
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
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prepare video data - Instagram embeds will handle playback
    setLoading(true);
    const videoData = instagramPosts.map((postUrl) => ({
      url: postUrl,
      embedUrl: `${postUrl}embed/`,
      title: 'Instagram Reel'
    }));
    setVideos(videoData);
    setLoading(false);
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

        {/* Instagram Videos Grid - Clean video-only display */}
        <Grid container spacing={3} justifyContent="center">
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                  border: "1px solid rgba(15, 38, 68, 0.08)",
                  bgcolor: "#000000",
                  position: "relative",
                  aspectRatio: "9/16", // Instagram reel aspect ratio
                  minHeight: 400,
                  // Aggressively crop to hide all UI elements
                  clipPath: "inset(0 0 40% 0)", // Hide bottom 40% where all UI is
                  // Additional overflow hidden to ensure nothing shows
                  "& iframe": {
                    pointerEvents: "auto !important"
                  }
                }}
              >
                {/* Instagram iframe embed - positioned to show only video area */}
                <Box
                  component="iframe"
                  src={video.embedUrl}
                  sx={{
                    width: "100%",
                    height: "165%", // Make much taller to account for aggressive cropping
                    border: "none",
                    display: "block",
                    position: "absolute",
                    top: "-32%", // Shift up significantly to center video area
                    left: 0,
                    objectFit: "cover",
                    transform: "scale(1.2)", // Scale up to ensure full coverage
                    transformOrigin: "center center"
                  }}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={video.title}
                  loading="lazy"
                  scrolling="no"
                  frameBorder="0"
                />
                {/* Solid overlay to completely hide bottom UI */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "#000000", // Solid black to completely hide all UI
                    pointerEvents: "none",
                    zIndex: 10,
                    borderRadius: "0 0 16px 16px" // Match container border radius
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
