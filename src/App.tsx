import React from "react";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { SecuritySection } from "./components/SecuritySection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-bold text-gray-900">Acme Support Portal</span>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#security" className="hover:text-gray-900">Security</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <PricingSection />
        <SecuritySection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
