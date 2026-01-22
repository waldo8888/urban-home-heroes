"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const serviceAreas = [
  "Vaughan",
  "Woodbridge",
  "Kleinburg",
  "North York",
  "Etobicoke",
  "North Etobicoke",
  "Concord",
  "Brampton (Southwest)",
  "Mississauga",
  "GTA"
];

export default function ServiceAreasSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="service-areas"
      className="reveal"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={4} sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#0e2740",
              textAlign: "center"
            }}
          >
            Areas We Serve
          </Typography>
          <Box sx={sectionDivider} />
          <Box sx={{ maxWidth: "100%", width: "100%", textAlign: "center" }}>
            <Typography 
              variant="body1" 
              sx={{ 
                ...sectionBodyStyle, 
                textAlign: "center",
                display: "block",
                maxWidth: "100%",
                width: "100%"
              }}
            >
              Looking for a local contractor near you? Urban Home Heroes is a licensed contractor serving Vaughan, Woodbridge, and the GTA as your reliable GTA contractor team. If you are searching for a contractor near Vaughan or contractor near Woodbridge, our professional, affordable contractor team can help.
            </Typography>
          </Box>
        </Stack>
        <Grid container spacing={2} className="stagger" mb={4}>
          {serviceAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={area} style={{ "--i": index }}>
              <Box
                sx={{
                  border: "1px solid rgba(240, 122, 43, 0.2)",
                  background: "linear-gradient(135deg, rgba(255, 241, 230, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  backdropFilter: "blur(10px)",
                  p: 3,
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#0e2740",
                  boxShadow: theme.customShadows.shadowPrimary,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: theme.customShadows.shadowPrimaryHover,
                    borderColor: "rgba(240, 122, 43, 0.4)"
                  }
                }}
              >
                {area}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", color: "#6a6f75", mb: 3 }}
        >
          Popular searches: Urban Home Hero, Urban Home Hero Vaughan, Urban Home Hero contractor, Urban Home Hero snow removal.
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Button
            variant="outlined"
            href="tel:4168229741"
            sx={{
              borderColor: "#f07a2b",
              color: "#f07a2b",
              px: 4,
              fontWeight: 600
            }}
          >
            Not sure? Call us!
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
