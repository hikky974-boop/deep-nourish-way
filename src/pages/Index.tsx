import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import CycleSection from "@/components/CycleSection";
import ProgramSection from "@/components/ProgramSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProofSection from "@/components/ProofSection";
import PricingSection from "@/components/PricingSection";
import ForWhoSection from "@/components/ForWhoSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <StickyHeader />
    <main>
      <HeroSection />
      <PillarsSection />
      <CycleSection />
      <ForWhoSection />
      <ProgramSection />
      <ExperienceSection />
      <ProofSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  </>
);

export default Index;
