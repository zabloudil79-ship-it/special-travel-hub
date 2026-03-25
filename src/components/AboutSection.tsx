import { motion } from "framer-motion";
import jetImg from "@/assets/service-jet.jpg";
import yachtImg from "@/assets/service-yacht.jpg";
import { useLang } from "@/context/LangContext";

const AboutSection = () => {
  const { t } = useLang();

  const guarantees = [
    { titleKey: "about.g1.title", textKey: "about.g1.text" },
    { titleKey: "about.g2.title", textKey: "about.g2.text" },
    { titleKey: "about.g3.title", textKey: "about.g3.text" },
    { titleKey: "about.g4.title", textKey: "about.g4.text" },
    { titleKey: "about.g5.title", textKey: "about.g5.text" },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              {t("about.label")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("about.title1")}
              <span className="italic text-primary">{t("about.title1.accent")}</span>
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">{t("about.p1")}</p>
            <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">{t("about.p2")}</p>
            <p className="font-body text-muted-foreground font-light leading-relaxed">{t("about.p3")}</p>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={jetImg} alt="Private jet interior" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" width={1280} height={854} />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={yachtImg} alt="Luxury yacht" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" width={1280} height={854} />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("about.guarantee")}
              <span className="italic text-primary">{t("about.guarantee.accent")}</span>
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <div className="space-y-6">
              {guarantees.map((item) => (
                <div key={item.titleKey}>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{t(item.titleKey)}</h3>
                  <p className="font-body text-sm text-muted-foreground font-light">{t(item.textKey)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
