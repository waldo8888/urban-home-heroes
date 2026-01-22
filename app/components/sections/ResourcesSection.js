"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { headingStyle, sectionBodyStyle } from "../../lib/sectionStyles";
import { resourceHighlights } from "../../data/resources";



const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function ResourcesSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="resources"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ ...headingStyle, textAlign: "left", fontSize: { xs: "2rem", md: "2.5rem" } }}>
                Get Quick Help Access{" "}
                <Box component="span" sx={{ color: "#0e2740" }}>
                  Useful Resources
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ ...sectionBodyStyle, textAlign: "left", fontSize: "1.1rem", color: "#6a6f75" }}>
                Use our helpful resources to learn home repair tips, maintain efficiency, extend lifespan, and avoid unnecessary replacements.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3} className="stagger">
              {resourceHighlights.map((resource, index) => (
                <Grid item xs={12} sm={4} key={resource.title} style={{ "--i": index }}>
                  <Card
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      height: { xs: 280, sm: 320 },
                      cursor: "pointer",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "#1f2a37",
                        backgroundImage: resource.image ? `url(${resource.image})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(14, 39, 64, 0.75)"
                        }
                      }}
                    />
                    <CardContent
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: 3
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: "1.1rem"
                        }}
                      >
                        {resource.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.95)",
                          lineHeight: 1.6
                        }}
                      >
                        {resource.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack direction="row" justifyContent="center" mt={4}>
              <Button
                variant="contained"
                href="/resources#quick-tips"
                endIcon={<ArrowForwardRounded />}
                sx={{
                  bgcolor: "#0e2740",
                  color: "#ffffff",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: theme.customShadows.buttonSecondary,
                  "&:hover": {
                    bgcolor: "#1f3a53",
                    transform: "translateY(-2px)",
                    boxShadow: theme.customShadows.buttonSecondaryHover
                  }
                }}
              >
                View All Resources
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
