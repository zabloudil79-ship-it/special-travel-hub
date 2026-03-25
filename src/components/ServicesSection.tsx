import { motion } from "framer-motion";
import { Plane, Ship, Palmtree, Home, Star, Users } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Soukromé lety",
    description:
      "Cestujte v naprostém komfortu a soukromí. Zajistíme vám privátní letadlo kamkoliv na světě – bez čekání, bez kompromisů.",
  },
  {
    icon: Ship,
    title: "Soukromé jachty",
    description:
      "Prozkoumejte nejkrásnější pobřeží Středomoří, Karibiku či Jihovýchodní Asie na palubě luxusní jachty s profesionální posádkou.",
  },
  {
    icon: Palmtree,
    title: "Soukromé ostrovy",
    description:
      "Absolutní soukromí na vlastním ostrově. Nabízíme pronájem exkluzivních soukromých ostrovů s kompletním servisem.",
  },
  {
    icon: Home,
    title: "Soukromé vily",
    description:
      "Luxusní vily na těch nejprestižnějších adresách světa – od Toskánska přes Bali až po Francouzskou Riviéru.",
  },
  {
    icon: Star,
    title: "Exkluzivní hotely & místa",
    description:
      "Přístup do nejexkluzivnějších hotelů a resortů, včetně těch, které běžně nepřijímají rezervace – díky našim osobním kontaktům.",
  },
  {
    icon: Users,
    title: "Privátní concierge",
    description:
      "Váš osobní asistent 24/7. Od rezervací restaurací přes VIP vstupenky až po organizaci soukromých událostí na míru.",
  },
];

const ServicesSection = () => {
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
            Co pro vás děláme
          </span>
          <h2 className="font-heading text-3xl md:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            Naše služby
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
            Každá služba je přizpůsobena vašim přáním. Neexistuje šablona – jen váš jedinečný zážitek.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background p-8 md:p-10 group hover:shadow-lg transition-shadow duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
