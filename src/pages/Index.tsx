import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { BusinessInfo } from "@/components/site/BusinessInfo";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  useEffect(() => {
    document.title = "Mahaveer Sales Corporation — Wooden Flooring & Interiors, Mumbai";
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' });
    meta.setAttribute('content', "Premium wooden flooring, blinds, wallpapers, decking and complete interior solutions in Mumbai. Trusted since 2006.");
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <BusinessInfo />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=919967980747&text=Hi%2C%20MAHAVEER%20SALES%20CORPORATION"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" /> Chat with us
      </a>
    </main>
  );
};

export default Index;
