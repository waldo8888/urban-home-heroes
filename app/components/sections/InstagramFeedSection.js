"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Button, Container, Grid, Stack, Typography, CircularProgress } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
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
  const videoRefs = useRef({});

  useEffect(() => {
    // Fetch video data from Instagram oEmbed API
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const videoPromises = instagramPosts.map(async (postUrl) => {
          try {
            const response = await fetch(`/api/instagram-video?url=${encodeURIComponent(postUrl)}`);
            if (!response.ok) throw new Error('Failed to fetch');
            
            const data = await response.json();
            
            // Use thumbnail as video source (Instagram provides high-quality thumbnails for reels)
            // For actual video playback, we'll use the embed iframe but style it to show only video
            return {
              url: postUrl,
              thumbnail: data.thumbnail_url,
              title: data.title || 'Instagram Reel',
              embedUrl: `${postUrl}embed/`
            };
          } catch (error) {
            console.error(`Error fetching video for ${postUrl}:`, error);
            return {
              url: postUrl,
              thumbnail: null,
              title: 'Instagram Reel',
              embedUrl: `${postUrl}embed/`
            };
          }
        });

        const videoData = await Promise.all(videoPromises);
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
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
        {loading ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <CircularProgress sx={{ color: "#E4405F" }} />
            <Typography variant="body2" sx={{ color: "#6a6f75", mt: 2 }}>
              Loading videos...
            </Typography>
          </Box>
        ) : (
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
                    aspectRatio: "9/16",
                    minHeight: 400,
                    cursor: "pointer",
                    "&:hover .play-overlay": {
                      opacity: 1
                    }
                  }}
                  onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}
                >
                  {/* Clean iframe embed - aggressively cropped to show only video */}
                  <Box
                    component="iframe"
                    src={video.embedUrl}
                    sx={{
                      width: "100%",
                      height: "200%", // Much taller to allow aggressive cropping
                      border: "none",
                      display: "block",
                      position: "absolute",
                      top: "-50%", // Shift up significantly to center video
                      left: 0,
                      pointerEvents: "auto",
                      transform: "scale(1.3)", // Scale up to ensure full coverage
                      transformOrigin: "center center",
                      clipPath: "inset(20% 0 45% 0)" // Crop top 20% and bottom 45% to hide all UI
                    }}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={video.title}
                    loading="lazy"
                    scrolling="no"
                  />
                  {/* Solid overlays to completely hide UI elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "15%",
                      background: "#000000",
                      pointerEvents: "none",
                      zIndex: 1
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: "#000000",
                      pointerEvents: "none",
                      zIndex: 1
                    }}
                  />
                  {/* Play button overlay on hover */}
                  <Box
                    className="play-overlay"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "50%",
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      pointerEvents: "none",
                      zIndex: 2,
                      opacity: 0,
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    <PlayArrowRounded sx={{ fontSize: 36 }} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

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
