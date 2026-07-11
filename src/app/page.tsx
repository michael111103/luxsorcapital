// src/app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import EducationModules from "./components/EducationModules";
import BonusSection from "./components/BonusSection";
import TypeSection from "./components/TypeSection";
import PricingSection from "./components/PricingSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import QuoteSection from "./components/QuoteSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingTelegramButton from "./components/FloatingTelegramButton";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <WhySection />
      <EducationModules />
      <BonusSection />
      <TypeSection />
      <PricingSection />
      <TestimonialCarousel />
      <QuoteSection />
      <FAQSection />
      <Footer />
      <FloatingTelegramButton />
    </main>
  );
}
