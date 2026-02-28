"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileCtaBar from "./components/MobileCtaBar";
import HeroSection from "./components/sections/HeroSection";

// Scrollytelling Components - Priority Loading
import ScrollytellingWrapper from "./components/scrollytelling/ScrollytellingWrapper";
import BrandStatementSection from "./components/scrollytelling/BrandStatementSection";
import ServicesShowcase from "./components/scrollytelling/ServicesShowcase";

// Scrollytelling Components - Lazy Loaded for performance
const InlineCTA = dynamic(() => import("./components/scrollytelling/InlineCTA"));
const InstagramReels = dynamic(() => import("./components/scrollytelling/InstagramReels"));
const TrustMarquee = dynamic(() => import("./components/scrollytelling/TrustMarquee"));
const ExpertiseGrid = dynamic(() => import("./components/scrollytelling/ExpertiseGrid"));
const ProcessSection = dynamic(() => import("./components/scrollytelling/ProcessSection"));
const StatsCounter = dynamic(() => import("./components/scrollytelling/StatsCounter"));
const TestimonialsMarquee = dynamic(() => import("./components/scrollytelling/TestimonialsMarquee"));
const FullScreenCTA = dynamic(() => import("./components/scrollytelling/FullScreenCTA"));

export default function HomePage() {
  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <SiteHeader hideOnMobile={true} />
      <Box component="main">
        <HeroSection />

        <ScrollytellingWrapper>
          <BrandStatementSection />
          <ServicesShowcase />
          <InlineCTA />
          <InstagramReels />
          <TrustMarquee />
          <ExpertiseGrid />
          <InlineCTA />
          <ProcessSection />
          <StatsCounter />
          <TestimonialsMarquee />
          <FullScreenCTA />
        </ScrollytellingWrapper>
      </Box>

      <SiteFooter />
      <MobileCtaBar quoteHref="#estimate" callLabel="Call Now" quoteLabel="Get a Free Quote" />
    </Box>
  );
}
