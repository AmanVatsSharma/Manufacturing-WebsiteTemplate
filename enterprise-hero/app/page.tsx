import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatYouGet from "@/components/WhatYouGet";
import Features from "@/components/Features";
import ManufacturingShowcase from "@/components/ManufacturingShowcase";
import ManufacturingVisuals from "@/components/ManufacturingVisuals";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatYouGet />
      <ManufacturingShowcase />
      <Features />
      <ManufacturingVisuals />
      <Services />
      <LeadForm />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}