import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ReportShowcase from "@/components/ReportShowcase";
import ProductsSection from "@/components/ProductsSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Perfy" },
      { name: "description", content: "Stop making wrong decisions about people. Perfy helps institutions understand individuals through structured assessments and 25+ page interpretation reports." },
      { property: "og:title", content: "Perfy" },
      { property: "og:description", content: "Research-driven psychometric analysis for schools, colleges, and companies." },
    ],
  }),
});

function Index() {
  // Skip intro on subsequent visits in same session for faster iteration
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("perfy_intro_seen") !== "1";
  });
  const handleComplete = useCallback(() => {
    sessionStorage.setItem("perfy_intro_seen", "1");
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleComplete} />}
      <div className={showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <PageContent />
      </div>
    </>
  );
}

function PageContent() {
  useScrollReveal();
  // Re-run on route changes / dynamic mounts
  useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add("revealed");
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <ReportShowcase />
      <ProductsSection />
      <UseCasesSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
