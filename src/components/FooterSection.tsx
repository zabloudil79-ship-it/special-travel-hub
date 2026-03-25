import { Plane } from "lucide-react";
import { useLang } from "@/context/LangContext";

const FooterSection = () => {
  const { t } = useLang();

  return (
    <footer className="bg-dark text-cream py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
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
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-4">{t("footer.contact")}</h3>
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

          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-4">{t("footer.legal")}</h3>
            <div className="font-body text-sm text-cream/70 font-light space-y-1">
              <p>{t("footer.iata")}</p>
              <p>{t("footer.registered")}</p>
              <p>{t("footer.insurance")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-heading text-base italic text-cream/50">{t("footer.motto")}</p>
          <p className="font-body text-xs text-cream/30">© {new Date().getFullYear()} {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
