"use client";

import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useTheme
} from "@mui/material";
import StarRounded from "@mui/icons-material/StarRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import GroupsRounded from "@mui/icons-material/GroupsRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";

const stats = [
  { value: "30+", label: "Years Experience", icon: TrendingUpRounded },
  { value: "1000+", label: "Happy Customers", icon: GroupsRounded },
  { value: "4.9", label: "Average Rating", icon: StarRounded },
  { value: "24/7", label: "Emergency Service", icon: VerifiedRounded }
];

export default function StatsSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      className="reveal"
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(240, 122, 43, 0.05) 0%, rgba(247, 162, 77, 0.05) 100%)",
        borderTop: "1px solid rgba(240, 122, 43, 0.1)",
        borderBottom: "1px solid rgba(240, 122, 43, 0.1)"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(240, 122, 43, 0.15)",
            boxShadow: theme.customShadows.large
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label} style={{ "--i": index }}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.75)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(240, 122, 43, 0.1)",
                    boxShadow: theme.customShadows.shadowPrimary,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: theme.customShadows.shadowPrimaryHover,
                      borderColor: "rgba(240, 122, 43, 0.2)"
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "rgba(240, 122, 43, 0.1)",
                      color: "#f07a2b",
                      mb: 2
                    }}
                  >
                    <stat.icon sx={{ fontSize: "2rem" }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#0e2740",
                      mb: 0.5,
                      fontSize: { xs: "2rem", md: "2.5rem" }
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6a6f75", fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
