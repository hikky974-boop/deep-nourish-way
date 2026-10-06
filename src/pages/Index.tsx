import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import CycleSection from "@/components/CycleSection";
import ProgramSection from "@/components/ProgramSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProofSection from "@/components/ProofSection";
import PricingSection from "@/components/PricingSection";
import ForWhoSection from "@/components/ForWhoSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import QuoteStrip from "@/components/QuoteStrip";
import CtaBand from "@/components/CtaBand";
import { useEffect } from "react";
import { initializeLandingTracking } from "@/lib/tracking";

const Index = () => {
  useEffect(() => {
    initializeLandingTracking();
  }, []);

  return (
  <>

    <StickyHeader />
    <main data-clarity-mask="true">
      <HeroSection />
      <QuoteStrip />
      <PillarsSection />
      <CycleSection />
      <CtaBand source="apres-cercle" text="Et si tu découvrais ce qui se cache derrière tes envies ?" />
      <ForWhoSection />
      <ProgramSection />
      <ExperienceSection />
      <ProofSection />
      <CtaBand source="apres-temoignages" text="Toi aussi, découvre ton profil." />
      <GuaranteeSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  </>
  );
};


export default Index;
