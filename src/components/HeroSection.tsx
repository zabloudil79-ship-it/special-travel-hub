import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { useLang } from "@/context/LangContext";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mov" type="video/quicktime" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-foreground/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 lg:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
              <Plane className="w-7 h-7 text-primary -rotate-45" />
            </div>
            <div className="font-heading">
              <span className="text-4xl font-semibold tracking-wider text-primary">SPECIAL</span>
              <br />
              <span className="text-2xl font-light tracking-[0.4em] text-primary">TRAVEL</span>
            </div>
          </div>

          <div className="w-24 h-[2px] bg-primary mb-8" />

          <h1 className="font-heading text-3xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-6 text-white">
            {t("hero.headline1")}
            <br />
            <span className="italic text-primary">{t("hero.headline2")}</span>
          </h1>

          <p className="font-body text-white/80 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
            {t("hero.subtitle")}
          </p>

          <a
            href="mailto:sales@specialtravel.cz"
            className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
