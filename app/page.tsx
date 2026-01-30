"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedPartners from "@/components/TrustedPartners";
import SochScoreSection from "@/components/SochScoreSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <FeaturedProperties />
      <SochScoreSection />
      <HowItWorks />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
