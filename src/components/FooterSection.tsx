import { Plane } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-cream py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-gold-light flex items-center justify-center">
                <Plane className="w-5 h-5 text-gold-light -rotate-45" />
              </div>
              <div className="font-heading">
                <span className="text-xl font-semibold tracking-wider text-gold-light">SPECIAL</span>
                <br />
                <span className="text-sm font-light tracking-[0.35em] text-gold-light">TRAVEL</span>
              </div>
            </div>
            <p className="font-body text-sm text-cream/60 font-light leading-relaxed">
              Exkluzivní cestovní agentura pro individuální cesty na míru.
              Více než 20 let zkušeností v oboru luxusního cestování.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-4">Kontakt</h3>
            <div className="font-body text-sm text-cream/70 font-light space-y-1">
              <p className="font-medium text-cream/90">SPECIAL TRAVEL</p>
              <p>ppm factum a.s.</p>
              <p>Bucharova 2657/12</p>
              <p>158 00 Praha 5</p>
              <p>Česká republika</p>
              <p className="mt-4">
                <a href="mailto:sales@specialtravel.cz" className="text-gold-light hover:underline">
                  sales@specialtravel.cz
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-4">Právní informace</h3>
            <div className="font-body text-sm text-cream/70 font-light space-y-1">
              <p>IATA číslo registrace: 96220541</p>
              <p>Registrovaná cestovní agentura</p>
              <p>Plné pojištění cestovní kanceláře</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-heading text-base italic text-cream/50">
            Žádné místo na zemi není téměř nemožné.
          </p>
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Special Travel. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
