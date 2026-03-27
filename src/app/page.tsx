"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import Ads from "../components/landing/Ads";
import DashboardPreview from "../components/landing/DashboardPreview";
import HowItWorks from "../components/landing/HowToWork";
import BusinessSetUpProcess from "../components/landing/setup";
import FeaturesSection from "../components/landing/FeatureSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CtaSection from "../components/landing/Cta";
import FAQ from "../components/landing/FQA";
import Footer from "../components/landing/Footer";

import ComingSoonPage from "../components/ComingSoon";
import PricingSection from "../components/package/PricingSection";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const now = new Date().getTime();
    const target = new Date("2026-03-28T00:00:00").getTime();

    if (now >= target) {
      setShowLanding(true);
    }
  }, []);

  // 🔹 Conditional Render
  if (!showLanding) {
    return <ComingSoonPage />;
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ads />
      <DashboardPreview />
      <HowItWorks />
      <BusinessSetUpProcess />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <FAQ />
      <Footer />
    </>
  );
}
