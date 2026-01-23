"use client";

import { Box } from "@mui/material";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileCtaBar from "./components/MobileCtaBar";
import MobileHeroNav from "./components/MobileHeroNav";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import PrimaryServicesSection from "./components/sections/PrimaryServicesSection";
import CommonProblemsSection from "./components/sections/CommonProblemsSection";
import MajorServicesSection from "./components/sections/MajorServicesSection";
import SnowRemovalBanner from "./components/sections/SnowRemovalBanner";
import SnowRemovalFocusSection from "./components/sections/SnowRemovalFocusSection";
import SeasonalServicesSection from "./components/sections/SeasonalServicesSection";
import SnowCtaStrip from "./components/sections/SnowCtaStrip";
import ReviewsSection from "./components/sections/ReviewsSection";
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
import InstagramFeedSection from "./components/sections/InstagramFeedSection";

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

        <SnowRemovalFocusSection />
        <SnowCtaStrip />

        <SeasonalServicesSection />

        <StatsSection />

        <PrimaryServicesSection />
        <SnowCtaStrip />

        <CommonProblemsSection />

        <MajorServicesSection />
        <SnowCtaStrip />

        <LocationFinderSection />

        <AboutSection />

        <WhyChooseUsSection />
        <SnowCtaStrip />

        <ReviewsSection />

        <InstagramFeedSection />

        <ExpertServiceSection />

        <ResourcesSection />

        <EstimateBookingSection />
        <SnowCtaStrip />

        <ServiceAreasSection />

        <HighlightsSection />

        <DetailedServicesSection />

        <ContactSection />

        <FaqSection />
        <SnowCtaStrip variant="dark" message="Ready for same-day snow removal?" />
      </Box>

      <SiteFooter />
      <MobileCtaBar quoteHref="#estimate" callLabel="Call Now" quoteLabel="Get Snow Removal Quote" />
    </Box>
  );
}
