import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PlatformPreview from "@/components/PlatformPreview";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <PlatformPreview />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
