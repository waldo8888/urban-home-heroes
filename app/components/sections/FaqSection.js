"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import { eyebrowStyle, headingStyle, sectionBodyStyle } from "../../lib/sectionStyles";

const faqs = [
  {
    question: "Do you offer same-day contractor service?",
    answer:
      "Yes. Same-day contractor service and emergency snow removal near me are available depending on location and availability."
  },
  {
    question: "Are you insured?",
    answer: "Yes. We are a licensed and insured contractor and treat every home with care and respect."
  },
  {
    question: "Do you provide estimates?",
    answer: "We provide transparent pricing with clear, upfront estimates after a quick review of the work needed."
  },
  {
    question: "Do you work in condos?",
    answer: "Absolutely. We are a trusted contractor for condo repairs and coordinate with concierge and property rules."
  },
  {
    question: "Is there a minimum job size?",
    answer: "No. We are a contractor for small jobs near me and full home projects."
  },
  {
    question: "What is the vinyl flooring install cost in Vaughan?",
    answer: "Costs vary by materials and scope. We provide transparent pricing after an on-site review."
  },
  {
    question: "Do you offer contractor services for commercial properties?",
    answer: "Yes! Urban Home Heroes services are available for commercial properties, too! We have experience servicing retail spaces, small businesses, corporate offices, restaurants, and more. Contact us to discuss your commercial contractor needs."
  },
  {
    question: "When will a contractor start on my project?",
    answer: "Within the first day or two of your work request. After the initial screening, our team will quickly match you with one of our contractor service experts to get the process started. The timeline can vary based on the scope of the project and location."
  },
  {
    question: "Does Urban Home Heroes need access to my tools?",
    answer: "No, there is absolutely no need for you to provide any tools or equipment. For added peace of mind, our service professionals show up on time with all of the necessary tools and materials to complete your service request."
  }
];

const sectionSpacing = { py: { xs: 8, md: 14 } };

export default function FaqSection() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleExpand = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      id="faq"
      className="reveal"
      sx={{ ...sectionSpacing, bgcolor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Stack spacing={2} className="stagger">
              {faqs.slice(0, 5).map((faq, index) => (
                <Accordion
                  key={faq.question}
                  expanded={expanded === faq.question}
                  onChange={handleExpand(faq.question)}
                  sx={{
                    border: "1px solid rgba(15, 38, 68, 0.08)",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    background: "#ffffff",
                    transition: "all 0.3s ease",
                    "&:before": { display: "none" },
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(240, 122, 43, 0.2)"
                    },
                    "&.Mui-expanded": {
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
                      borderColor: "rgba(240, 122, 43, 0.3)"
                    }
                  }}
                  style={{ "--i": index }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreRounded
                        sx={{
                          color: "#0e2740",
                          transform: expanded === faq.question ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease"
                        }}
                      />
                    }
                    sx={{
                      "& .MuiAccordionSummary-content": {
                        my: 2.5
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, color: "#0e2740", fontSize: "1rem" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#6a6f75", lineHeight: 1.7, pb: 1 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={4} sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
              <Stack spacing={2}>
                <Typography variant="h2" sx={{ ...headingStyle, textAlign: "left", fontSize: { xs: "2rem", md: "2.5rem" } }}>
                  Questions{" "}
                  <Box component="span" sx={{ color: "#0e2740" }}>
                    Answered FAQ
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ ...sectionBodyStyle, textAlign: "left", fontSize: "1.1rem", color: "#6a6f75" }}>
                  Our expert contractors provide professional and caring home repair service you can always trust.
                </Typography>
              </Stack>
              <Button
                variant="contained"
                href="#faq"
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
                View All FAQ
              </Button>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #f07a2b 0%, #f7a24d 100%)",
                  color: "#ffffff",
                  p: 3.5,
                  borderRadius: 3,
                  boxShadow: theme.customShadows.medium,
                  border: "none"
                }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <ChatBubbleRounded sx={{ fontSize: "1.5rem" }} />
                  </Box>
                  <Stack spacing={2} sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                      Have more questions? Book a free discovery call
                    </Typography>
                    <Button
                      variant="contained"
                      href="#estimate"
                      sx={{
                        bgcolor: "#0e2740",
                        color: "#ffffff",
                        px: 3,
                        py: 1.25,
                        fontWeight: 700,
                        borderRadius: 2,
                        alignSelf: "flex-start",
                        "&:hover": {
                          bgcolor: "#1f3a53",
                          transform: "translateY(-2px)",
                          boxShadow: theme.customShadows.buttonSecondaryHover
                        }
                      }}
                    >
                      Let's Talk Urban Home Heroes
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
