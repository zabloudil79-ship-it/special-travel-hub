import { motion } from "framer-motion";
import jetImg from "@/assets/service-jet.jpg";
import yachtImg from "@/assets/service-yacht.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Row 1: Text + Jet */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Proč Special Travel
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Cestování jako
              <span className="italic text-primary"> umění</span>
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">
              Nejsme běžná cestovní agentura. Jsme tým zkušených cestovních specialistů s osobními kontakty po celém světě. Díky naší síti partnerů vám otevíráme dveře, které zůstávají pro ostatní zavřené.
            </p>
            <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">
              Každou cestu navrhujeme od začátku – podle vašich přání, vašeho tempa a vašeho stylu. Ať už toužíte po romantickém útěku ve dvou, rodinném dobrodružství nebo soukromé expedici na konec světa.
            </p>
            <p className="font-body text-muted-foreground font-light leading-relaxed">
              S více než dvacetiletými zkušenostmi v oboru a registrací IATA garantujeme profesionální přístup, absolutní diskrétnost a servis na nejvyšší úrovni.
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={jetImg}
              alt="Interiér soukromého letadla"
              className="w-full h-80 lg:h-[500px] object-cover"
              loading="lazy"
              width={1280}
              height={854}
            />
          </motion.div>
        </div>

        {/* Row 2: Yacht + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={yachtImg}
              alt="Luxusní jachta u soukromého ostrova"
              className="w-full h-80 lg:h-[500px] object-cover"
              loading="lazy"
              width={1280}
              height={854}
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Naše
              <span className="italic text-primary"> garance</span>
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />

            <div className="space-y-6">
              {[
                {
                  title: "Soukromý přístup",
                  text: "Vaše cesta je pouze vaše. Žádné skupiny, žádné kompromisy.",
                },
                {
                  title: "Důvěra & diskrétnost",
                  text: "Chráníme vaše soukromí s maximální péčí a profesionalitou.",
                },
                {
                  title: "Exkluzivita",
                  text: "Přístup k místům a zážitkům, které nejsou veřejně dostupné.",
                },
                {
                  title: "Zodpovědnost",
                  text: "Každý detail plánujeme s absolutní precizností a spolehlivostí.",
                },
                {
                  title: "Záruka kvality",
                  text: "Registrovaná cestovní agentura IATA s plným pojištěním.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground font-light">
                    {item.text}
                  </p>
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
