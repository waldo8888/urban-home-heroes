"use client";

import { Box } from "@mui/material";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileCtaBar from "./components/MobileCtaBar";
import MobileHeroNav from "./components/MobileHeroNav";
import HeroSection from "./components/sections/HeroSection";
import SnowRemovalBanner from "./components/sections/SnowRemovalBanner";

// Scrollytelling Components
import ScrollytellingWrapper from "./components/scrollytelling/ScrollytellingWrapper";
import BrandStatementSection from "./components/scrollytelling/BrandStatementSection";
import ServicesShowcase from "./components/scrollytelling/ServicesShowcase";
import InlineCTA from "./components/scrollytelling/InlineCTA";
import InstagramReels from "./components/scrollytelling/InstagramReels";
import TrustMarquee from "./components/scrollytelling/TrustMarquee";
import ExpertiseGrid from "./components/scrollytelling/ExpertiseGrid";
import ProcessSection from "./components/scrollytelling/ProcessSection";
import StatsCounter from "./components/scrollytelling/StatsCounter";
import TestimonialsMarquee from "./components/scrollytelling/TestimonialsMarquee";
import FullScreenCTA from "./components/scrollytelling/FullScreenCTA";

export default function HomePage() {
  return (
    <Box className="page" id="top" sx={{ bgcolor: "transparent" }}>
      <SiteHeader hideOnMobile={true} />
      <Box component="main">
        {/* Mobile Navigation Bar - Above banner on mobile only */}
        <MobileHeroNav />

        {/* Snow Removal Banner - At the very top */}
        <SnowRemovalBanner />

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
      <MobileCtaBar quoteHref="#estimate" callLabel="Call Now" quoteLabel="Get Snow Removal Quote" />
    </Box>
  );
}
