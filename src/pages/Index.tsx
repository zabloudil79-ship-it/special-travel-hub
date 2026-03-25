import { LangProvider } from "@/context/LangContext";
import LangToggle from "@/components/LangToggle";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <LangProvider>
      <main className="font-body bg-background text-foreground">
        <LangToggle />
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </LangProvider>
  );
};

export default Index;
