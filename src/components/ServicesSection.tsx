import { motion } from "framer-motion";
import { Plane, Ship, Palmtree, Home, Star, Users } from "lucide-react";
import { useLang } from "@/context/LangContext";

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    { icon: Plane, titleKey: "services.flights.title", descKey: "services.flights.desc" },
    { icon: Ship, titleKey: "services.yachts.title", descKey: "services.yachts.desc" },
    { icon: Palmtree, titleKey: "services.islands.title", descKey: "services.islands.desc" },
    { icon: Home, titleKey: "services.villas.title", descKey: "services.villas.desc" },
    { icon: Star, titleKey: "services.hotels.title", descKey: "services.hotels.desc" },
    { icon: Users, titleKey: "services.concierge.title", descKey: "services.concierge.desc" },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            {t("services.label")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              className="bg-background p-8 md:p-10 group hover:shadow-lg transition-shadow duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
