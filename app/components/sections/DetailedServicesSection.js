"use client";

import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { sectionBodyStyle, sectionDivider } from "../../lib/sectionStyles";

const detailedServices = [
  {
    title: "Interior Repair",
    description: "From TV wall mounts to picture hanging, our interior repair services keep your home functional and organized.",
    items: [
      "TV wall mount installation",
      "Picture hanging",
      "Shelving installation",
      "Closet shelving",
      "Ceiling fan installation",
      "Bathroom caulking",
      "Grout repair",
      "Child proofing",
      "Curtain and blind installation"
    ]
  },
  {
    title: "Exterior Repair",
    description: "Keep your home's exterior in top condition with our comprehensive exterior repair services.",
    items: [
      "Window frame repair",
      "Window and door weatherproofing",
      "Debris removal",
      "Masonry and concrete services",
      "Exterior painting",
      "Siding repair"
    ]
  },
  {
    title: "Flooring Installation & Repair",
    description: "Professional flooring services for every room in your home, from installation to repair.",
    items: [
      "Vinyl flooring installation",
      "Laminate flooring installation",
      "Floor tile installation and repair",
      "Subfloor repairs",
      "Trim finishing",
      "Floor refinishing"
    ]
  },
  {
    title: "Plumbing Services",
    description: "Expert plumbing services to keep your water systems flowing smoothly and prevent costly water damage.",
    items: [
      "Faucet repair and replacement",
      "Toilet repair and replacement",
      "Sink repair and replacement",
      "Vanity installation",
      "Drain repair",
      "Pipe insulation",
      "Leak detection",
      "Water valve repair"
    ]
  },
  {
    title: "Lighting & Electrical",
    description: "Keep your home bright and safe with our comprehensive lighting and electrical services.",
    items: [
      "Light fixture installation and repair",
      "GFCI outlet installation",
      "Switch installation and repair",
      "Recessed lighting installation",
      "Smart home device installation",
      "Smoke detector installation",
      "Carbon monoxide detector installation",
      "Electrical safety inspections"
    ]
  },
  {
    title: "Carpentry, Fences & Decks",
    description: "Expert carpentry services for both interior and exterior projects, from custom shelving to deck construction.",
    items: [
      "Fence repair and installation",
      "Deck repair and construction",
      "Porch repair",
      "Railing installation",
      "Custom shelving",
      "Crown molding installation",
      "Custom cabinets",
      "Pergola and awning installation"
    ]
  },
  {
    title: "Painting & Drywall",
    description: "Professional painting and drywall services for interior and exterior surfaces.",
    items: [
      "Interior painting",
      "Exterior painting",
      "Drywall patching and repair",
      "Drywall installation",
      "Wall finishing",
      "Ceiling repair",
      "Cabinet painting",
      "Trim painting"
    ]
  },
  {
    title: "Doors & Windows",
    description: "Complete door and window services for improved security, energy efficiency, and aesthetics.",
    items: [
      "Door installation and repair",
      "Window installation and replacement",
      "Lock repair and installation",
      "Screen door installation",
      "Pet door installation",
      "Window screen repair",
      "Weatherproofing"
    ]
  },
  {
    title: "Home Maintenance & Seasonal Services",
    description: "Keep your home in top condition year-round with our maintenance and seasonal services.",
    items: [
      "Seasonal maintenance",
      "Snow removal",
      "Gutter cleaning",
      "Power washing",
      "Attic insulation",
      "General home repairs",
      "Holiday lighting installation"
    ]
  },
  {
    title: "Safety & Mobility Services",
    description: "Senior-friendly home upgrades and safety improvements for aging in place.",
    items: [
      "Grab bar installation",
      "Handrail installation",
      "Ramp installation",
      "Lever door handle installation",
      "Threshold lowering",
      "Cabinet and drawer upgrades",
      "Accessibility modifications"
    ]
  },
  {
    title: "Assembly & Installation",
    description: "Professional assembly and installation services for furniture, appliances, and more.",
    items: [
      "Furniture assembly",
      "Appliance installation",
      "Cabinet assembly",
      "Grill assembly",
      "Bike assembly",
      "TV and electronics installation"
    ]
  },
  {
    title: "Commercial Services",
    description: "Professional contractor services for commercial properties, retail spaces, and businesses.",
    items: [
      "Commercial repairs",
      "Retail space maintenance",
      "Office improvements",
      "Restaurant services",
      "Property management support",
      "Commercial painting",
      "Commercial flooring"
    ]
  }
];



export default function DetailedServicesSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="detailed-services"
      className="reveal"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={4}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#0e2740"
            }}
          >
            Contractor &{" "}
            <Box component="span" sx={{ color: "#f07a2b" }}>
              Home Repair Services
            </Box>
          </Typography>
          <Box sx={sectionDivider} />
          <Typography variant="body1" sx={{ ...sectionBodyStyle, maxWidth: 600 }}>
            Detailed help for every corner of your home.
          </Typography>
        </Stack>
        <Grid container spacing={3} className="stagger">
          {detailedServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title} style={{ "--i": index }}>
                                <Card
                                  sx={{
                                    height: "100%",
                                    p: 3,
                                    border: "1px solid rgba(15, 38, 68, 0.08)",
                                    boxShadow: theme.customShadows.soft,
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                      transform: "translateY(-8px) scale(1.02)",
                                      boxShadow: theme.customShadows.medium
                                    }
                                  }}
                                >                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#0e2740" }}>
                  {service.title}
                </Typography>
                {service.description && (
                  <Typography variant="body2" sx={{ color: "#6a6f75", mb: 2, lineHeight: 1.6, fontSize: "0.9rem" }}>
                    {service.description}
                  </Typography>
                )}
                <Stack component="ul" spacing={0.75} sx={{ pl: 2, m: 0, color: "#6a6f75", flex: 1 }}>
                  {service.items.map((item) => (
                    <Box component="li" key={item} sx={{ listStyleType: "disc", fontSize: "0.9rem" }}>
                      {item}
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
