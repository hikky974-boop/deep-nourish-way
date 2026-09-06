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
import { useEffect } from "react";
import { sendLandingView } from "@/lib/tracking";

const Index = () => {
  useEffect(() => {
    sendLandingView();
  }, []);

  return (
  <>

    <StickyHeader />
    <main data-clarity-mask="true">
      <HeroSection />
      <PillarsSection />
      <CycleSection />
      <ForWhoSection />
      <ProgramSection />
      <ExperienceSection />
      <ProofSection />
      <GuaranteeSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  </>
);

export default Index;
