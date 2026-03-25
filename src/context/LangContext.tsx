import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "cs" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.headline1": { cs: "Exkluzivní a individuální", en: "Exclusive and individual" },
  "hero.headline2": { cs: "cestování na nejvyšší úrovni", en: "travel at the highest level" },
  "hero.subtitle": {
    cs: "Vytváříme jedinečné cestovní zážitky pro ty nejnáročnější klienty. Každá cesta je osobním příběhem, který si zasloužíte prožít.",
    en: "We create unique travel experiences for the most discerning clients. Every journey is a personal story you deserve to live.",
  },
  "hero.cta": { cs: "Kontaktujte nás", en: "Contact us" },

  // Services
  "services.label": { cs: "Co pro vás děláme", en: "What we do for you" },
  "services.title": { cs: "Naše služby", en: "Our services" },
  "services.subtitle": {
    cs: "Každá služba je přizpůsobena vašim přáním. Neexistuje šablona – jen váš jedinečný zážitek.",
    en: "Every service is tailored to your wishes. No templates – only your unique experience.",
  },
  "services.flights.title": { cs: "Soukromé lety", en: "Private flights" },
  "services.flights.desc": {
    cs: "Cestujte v naprostém komfortu a soukromí. Zajistíme vám privátní letadlo kamkoliv na světě – bez čekání, bez kompromisů.",
    en: "Travel in complete comfort and privacy. We arrange a private aircraft anywhere in the world – no waiting, no compromises.",
  },
  "services.yachts.title": { cs: "Soukromé jachty", en: "Private yachts" },
  "services.yachts.desc": {
    cs: "Prozkoumejte nejkrásnější pobřeží Středomoří, Karibiku či Jihovýchodní Asie na palubě luxusní jachty s profesionální posádkou.",
    en: "Explore the most beautiful coastlines of the Mediterranean, Caribbean or Southeast Asia aboard a luxury yacht with a professional crew.",
  },
  "services.islands.title": { cs: "Soukromé ostrovy", en: "Private islands" },
  "services.islands.desc": {
    cs: "Absolutní soukromí na vlastním ostrově. Nabízíme pronájem exkluzivních soukromých ostrovů s kompletním servisem.",
    en: "Absolute privacy on your own island. We offer exclusive private island rentals with full service.",
  },
  "services.villas.title": { cs: "Soukromé vily", en: "Private villas" },
  "services.villas.desc": {
    cs: "Luxusní vily na těch nejprestižnějších adresách světa – od Toskánska přes Bali až po Francouzskou Riviéru.",
    en: "Luxury villas at the most prestigious addresses in the world – from Tuscany through Bali to the French Riviera.",
  },
  "services.hotels.title": { cs: "Exkluzivní hotely & místa", en: "Exclusive hotels & places" },
  "services.hotels.desc": {
    cs: "Přístup do nejexkluzivnějších hotelů a resortů, včetně těch, které běžně nepřijímají rezervace – díky našim osobním kontaktům.",
    en: "Access to the most exclusive hotels and resorts, including those that don't normally accept reservations – thanks to our personal contacts.",
  },
  "services.concierge.title": { cs: "Privátní concierge", en: "Private concierge" },
  "services.concierge.desc": {
    cs: "Váš osobní asistent 24/7. Od rezervací restaurací přes VIP vstupenky až po organizaci soukromých událostí na míru.",
    en: "Your personal assistant 24/7. From restaurant reservations to VIP tickets to organizing bespoke private events.",
  },

  // Destinations
  "dest.label": { cs: "Inspirace pro vaši cestu", en: "Inspiration for your journey" },
  "dest.title": { cs: "Exkluzivní destinace", en: "Exclusive destinations" },
  "dest.subtitle": {
    cs: "Od tropických rájů po divoké safari – objevte místa, kam se dostanete jen díky těm správným kontaktům.",
    en: "From tropical paradises to wild safaris – discover places you can only reach with the right connections.",
  },
  "dest.maldives.title": { cs: "Maledivy", en: "Maldives" },
  "dest.maldives.subtitle": { cs: "Indický oceán", en: "Indian Ocean" },
  "dest.maldives.desc": {
    cs: "Soukromé vodní vily nad tyrkysovou lagunou. Nezapomenutelný klid a luxus uprostřed Indického oceánu.",
    en: "Private overwater villas above a turquoise lagoon. Unforgettable tranquility and luxury in the Indian Ocean.",
  },
  "dest.amalfi.title": { cs: "Pobřeží Amalfi", en: "Amalfi Coast" },
  "dest.amalfi.subtitle": { cs: "Itálie", en: "Italy" },
  "dest.amalfi.desc": {
    cs: "Projížďka luxusní jachtou podél dramatických útesů s výhledem na barevné vesničky zavěšené nad mořem.",
    en: "A luxury yacht cruise along dramatic cliffs overlooking colorful villages perched above the sea.",
  },
  "dest.santorini.title": { cs: "Santorini", en: "Santorini" },
  "dest.santorini.subtitle": { cs: "Řecko", en: "Greece" },
  "dest.santorini.desc": {
    cs: "Nekonečné bazény s výhledem na kalderu, ikonická bílá architektura a západy slunce, které berou dech.",
    en: "Infinity pools overlooking the caldera, iconic white architecture and breathtaking sunsets.",
  },
  "dest.safari.title": { cs: "Africké safari", en: "African Safari" },
  "dest.safari.subtitle": { cs: "Keňa & Tanzanie", en: "Kenya & Tanzania" },
  "dest.safari.desc": {
    cs: "Luxusní tábory uprostřed savany. Romantické večeře pod hvězdami s divokou přírodou na dosah ruky.",
    en: "Luxury camps in the heart of the savanna. Romantic dinners under the stars with wildlife at arm's reach.",
  },

  // About
  "about.label": { cs: "Proč Special Travel", en: "Why Special Travel" },
  "about.title1": { cs: "Cestování jako", en: "Travel as" },
  "about.title1.accent": { cs: " umění", en: " art" },
  "about.p1": {
    cs: "Nejsme běžná cestovní agentura. Jsme tým zkušených cestovních specialistů s osobními kontakty po celém světě. Díky naší síti partnerů vám otevíráme dveře, které zůstávají pro ostatní zavřené.",
    en: "We are not an ordinary travel agency. We are a team of experienced travel specialists with personal contacts around the world. Thanks to our network of partners, we open doors that remain closed to others.",
  },
  "about.p2": {
    cs: "Každou cestu navrhujeme od začátku – podle vašich přání, vašeho tempa a vašeho stylu. Ať už toužíte po romantickém útěku ve dvou, rodinném dobrodružství nebo soukromé expedici na konec světa.",
    en: "We design every trip from scratch – according to your wishes, your pace and your style. Whether you dream of a romantic getaway for two, a family adventure or a private expedition to the ends of the earth.",
  },
  "about.p3": {
    cs: "S více než dvacetiletými zkušenostmi v oboru a registrací IATA garantujeme profesionální přístup, absolutní diskrétnost a servis na nejvyšší úrovni.",
    en: "With over twenty years of experience in the industry and IATA registration, we guarantee a professional approach, absolute discretion and the highest level of service.",
  },
  "about.guarantee": { cs: "Naše", en: "Our" },
  "about.guarantee.accent": { cs: " garance", en: " guarantee" },
  "about.g1.title": { cs: "Soukromý přístup", en: "Private access" },
  "about.g1.text": {
    cs: "Vaše cesta je pouze vaše. Žádné skupiny, žádné kompromisy.",
    en: "Your trip is yours alone. No groups, no compromises.",
  },
  "about.g2.title": { cs: "Důvěra & diskrétnost", en: "Trust & discretion" },
  "about.g2.text": {
    cs: "Chráníme vaše soukromí s maximální péčí a profesionalitou.",
    en: "We protect your privacy with the utmost care and professionalism.",
  },
  "about.g3.title": { cs: "Exkluzivita", en: "Exclusivity" },
  "about.g3.text": {
    cs: "Přístup k místům a zážitkům, které nejsou veřejně dostupné.",
    en: "Access to places and experiences that are not publicly available.",
  },
  "about.g4.title": { cs: "Zodpovědnost", en: "Responsibility" },
  "about.g4.text": {
    cs: "Každý detail plánujeme s absolutní precizností a spolehlivostí.",
    en: "We plan every detail with absolute precision and reliability.",
  },
  "about.g5.title": { cs: "Záruka kvality", en: "Quality guarantee" },
  "about.g5.text": {
    cs: "Registrovaná cestovní agentura IATA s plným pojištěním.",
    en: "IATA registered travel agency with full insurance.",
  },

  // Footer
  "footer.desc": {
    cs: "Exkluzivní cestovní agentura pro individuální cesty na míru. Více než 20 let zkušeností v oboru luxusního cestování.",
    en: "Exclusive travel agency for bespoke individual journeys. Over 20 years of experience in luxury travel.",
  },
  "footer.contact": { cs: "Kontakt", en: "Contact" },
  "footer.legal": { cs: "Právní informace", en: "Legal information" },
  "footer.iata": { cs: "IATA číslo registrace: 96220541", en: "IATA registration number: 96220541" },
  "footer.registered": { cs: "Registrovaná cestovní agentura", en: "Registered travel agency" },
  "footer.insurance": { cs: "Plné pojištění cestovní kanceláře", en: "Full travel agency insurance" },
  "footer.motto": {
    cs: "Žádné místo na zemi není téměř nemožné.",
    en: "No place on earth is nearly impossible.",
  },
  "footer.rights": {
    cs: "Special Travel. Všechna práva vyhrazena.",
    en: "Special Travel. All rights reserved.",
  },
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("cs");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
