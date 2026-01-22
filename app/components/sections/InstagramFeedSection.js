"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
  const videos = instagramPosts.map((postUrl) => {
    const match = postUrl.match(/instagram\.com\/(reel|p)\/([^/?]+)/i);
    const type = match?.[1] ?? "reel";
    const id = match?.[2] ?? "";
    return {
      url: postUrl,
      title: "Instagram Reel",
      embedUrl: id ? `https://www.instagram.com/${type}/${id}/embed/` : postUrl
    };
  });

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

        {/* Instagram Videos Grid - embedded reels */}
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
                  minHeight: 420
                }}
              >
                <Box
                  component="iframe"
                  src={video.embedUrl}
                  title={video.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: 0
                  }}
                />
                {/* Instagram icon badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2
                  }}
                >
                  <Instagram sx={{ fontSize: 20, color: "#ffffff" }} />
                </Box>
                {/* Play button overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "999px",
                    px: 2,
                    py: 0.6,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#ffffff",
                    zIndex: 2,
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  <PlayArrowRounded sx={{ fontSize: 18 }} />
                  Tap to play
                </Box>
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
