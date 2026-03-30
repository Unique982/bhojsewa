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


import PricingSection from "../components/package/PricingSection";

export default function Home() {
  
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
