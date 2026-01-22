"use client";

import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography, CircularProgress } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

// Instagram username (without @)
const INSTAGRAM_USERNAME = "urbanhomeheroes";

// Fallback: Manual post URLs if automatic fetching doesn't work
// To get post URLs: Go to Instagram post → Three dots → Copy link
const MANUAL_POST_URLS = [
  // Add Instagram post URLs here as fallback
  // Example: "https://www.instagram.com/p/ABC123xyz/"
];

const sectionSpacing = { py: { xs: 8, md: 12 } };

export default function InstagramFeedSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch Instagram posts from our Next.js API route
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Call our Next.js API route which handles server-side fetching
        const response = await fetch('/api/instagram');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        } else if (MANUAL_POST_URLS.length > 0) {
          // Use manual post URLs as fallback
          setPosts(MANUAL_POST_URLS);
        } else {
          // No posts found - will show fallback UI
          setPosts([]);
        }
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(err.message);
        // Fallback to empty array - will show the placeholder
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  useEffect(() => {
    // Load Instagram embed script when posts are available
    if (posts.length === 0) return;

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

    // Load script after a short delay to ensure DOM is ready
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
  }, [posts]);

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

        {loading ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <CircularProgress sx={{ color: "#E4405F" }} />
            <Typography variant="body2" sx={{ color: "#6a6f75", mt: 2 }}>
              Loading Instagram posts...
            </Typography>
          </Box>
        ) : posts.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {posts.map((postUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 16px 36px rgba(18, 38, 62, 0.12)",
                    border: "1px solid rgba(15, 38, 68, 0.08)",
                    minHeight: 400
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
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 6,
              px: 3,
              borderRadius: 4,
              bgcolor: "#ffffff",
              border: "1px solid rgba(15, 38, 68, 0.08)"
            }}
          >
            <Instagram sx={{ fontSize: 64, color: "#E4405F", mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#0e2740", mb: 1 }}>
              Follow @urbanhomeheroes
            </Typography>
            <Typography variant="body1" sx={{ color: "#6a6f75", mb: 3 }}>
              Visit our Instagram to see our latest work and projects.
            </Typography>
            <Button
              variant="contained"
              href="https://www.instagram.com/urbanhomeheroes"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Instagram />}
              sx={{
                bgcolor: "#E4405F",
                color: "#ffffff",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#C13584",
                  transform: "translateY(-2px)"
                }
              }}
            >
              View Instagram Profile
            </Button>
          </Box>
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
