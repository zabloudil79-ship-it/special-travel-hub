import { motion } from "framer-motion";
import maldivesImg from "@/assets/destination-maldives.jpg";
import amalfiImg from "@/assets/destination-amalfi.jpg";
import safariImg from "@/assets/destination-safari.jpg";
import santoriniImg from "@/assets/destination-santorini.jpg";

const destinations = [
  {
    image: maldivesImg,
    title: "Maledivy",
    subtitle: "Indický oceán",
    description:
      "Soukromé vodní vily nad tyrkysovou lagunou. Nezapomenutelný klid a luxus uprostřed Indického oceánu.",
  },
  {
    image: amalfiImg,
    title: "Pobřeží Amalfi",
    subtitle: "Itálie",
    description:
      "Projížďka luxusní jachtou podél dramatických útesů s výhledem na barevné vesničky zavěšené nad mořem.",
  },
  {
    image: santoriniImg,
    title: "Santorini",
    subtitle: "Řecko",
    description:
      "Nekonečné bazény s výhledem na kalderu, ikonická bílá architektura a západy slunce, které berou dech.",
  },
  {
    image: safariImg,
    title: "Africké safari",
    subtitle: "Keňa & Tanzanie",
    description:
      "Luxusní tábory uprostřed savany. Romantické večeře pod hvězdami s divokou přírodou na dosah ruky.",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Inspirace pro vaši cestu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            Exkluzivní destinace
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
            Od tropických rájů po divoké safari – objevte místa, kam se dostanete jen díky těm správným kontaktům.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={854}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-light block mb-2">
                  {dest.subtitle}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-cream mb-2">
                  {dest.title}
                </h3>
                <p className="font-body text-sm text-cream/80 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
