import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-24 bg-background relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
              <Plane className="w-7 h-7 text-primary -rotate-45" />
            </div>
            <div className="font-heading">
              <span className="text-4xl font-semibold tracking-wider text-primary">SPECIAL</span>
              <br />
              <span className="text-2xl font-light tracking-[0.4em] text-primary">TRAVEL</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-primary mb-8" />

          {/* Headline */}
          <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-6 text-foreground">
            Exkluzivní a individuální
            <br />
            <span className="italic text-primary">cestování na nejvyšší úrovni</span>
          </h1>

          <p className="font-body text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
            Vytváříme jedinečné cestovní zážitky pro ty nejnáročnější klienty.
            Každá cesta je osobním příběhem, který si zasloužíte prožít.
          </p>

          {/* CTA */}
          <a
            href="mailto:sales@specialtravel.cz"
            className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Kontaktujte nás
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 min-h-[60vh] lg:min-h-screen relative overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Exotická pláž s tyrkysovou vodou"
          className="w-full h-full object-cover"
          width={1024}
          height={1536}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
