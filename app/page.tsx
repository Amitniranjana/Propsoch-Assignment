"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SochScoreSection from "@/components/SochScoreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SochScoreSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
