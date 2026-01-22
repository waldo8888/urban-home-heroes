"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import GroupsRounded from "@mui/icons-material/GroupsRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import RequestQuoteRounded from "@mui/icons-material/RequestQuoteRounded";
import Instagram from "@mui/icons-material/Instagram";
import SiteFooter from "./components/SiteFooter";
import MobileCtaBar from "./components/MobileCtaBar";
import { eyebrowStyle, headingStyle, sectionBodyStyle, sectionDivider } from "./lib/sectionStyles";
import EmailRounded from "@mui/icons-material/EmailRounded";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import PrimaryServicesSection from "./components/sections/PrimaryServicesSection";
import CommonProblemsSection from "./components/sections/CommonProblemsSection";
import MajorServicesSection from "./components/sections/MajorServicesSection";
import LocationFinderSection from "./components/sections/LocationFinderSection";
import AboutSection from "./components/sections/AboutSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import ExpertServiceSection from "./components/sections/ExpertServiceSection";
import ResourcesSection from "./components/sections/ResourcesSection";
import EstimateBookingSection from "./components/sections/EstimateBookingSection";
import ServiceAreasSection from "./components/sections/ServiceAreasSection";
import HighlightsSection from "./components/sections/HighlightsSection";
import DetailedServicesSection from "./components/sections/DetailedServicesSection";
import ContactSection from "./components/sections/ContactSection";
import FaqSection from "./components/sections/FaqSection";

const cardHover = {
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(18, 38, 62, 0.15), 0 0 0 1px rgba(240, 122, 43, 0.1)"
  }
};

const modernCardStyle = {
  borderRadius: 4,
  border: "1px solid rgba(15, 38, 68, 0.06)",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
};

const sectionSpacing = { py: { xs: 8, md: 14 } };


export default function HomePage() {

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    // More reliable observer with better mobile support
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, // Lower threshold for better mobile detection
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element enters viewport
      }
    );

    items.forEach((item) => observer.observe(item));

    // Fallback: Make visible after a delay if observer hasn't triggered (mobile safety)
    const fallbackTimeout = setTimeout(() => {
      items.forEach((item) => {
        if (!item.classList.contains("is-visible")) {
          const rect = item.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            item.classList.add("is-visible");
          }
        }
      });
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <Box component="main">
        <HeroSection />

        <StatsSection />

        <PrimaryServicesSection />

        <CommonProblemsSection />

        <MajorServicesSection />

        <LocationFinderSection />

        <AboutSection />

        <WhyChooseUsSection />

        <ExpertServiceSection />

        <ResourcesSection />

        <EstimateBookingSection />

        <ServiceAreasSection />

        <HighlightsSection />

        <DetailedServicesSection />

        <ContactSection />

        <FaqSection />
      </Box>

      <SiteFooter />
      <MobileCtaBar quoteHref="#estimate" />
    </Box>
  );
}
