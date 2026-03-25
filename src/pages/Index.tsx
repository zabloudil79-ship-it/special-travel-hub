import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="font-body bg-background text-foreground">
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
};

export default Index;
