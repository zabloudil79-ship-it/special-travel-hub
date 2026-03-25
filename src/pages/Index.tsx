import { Plane } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-body bg-background text-foreground">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <Plane className="w-6 h-6 text-primary -rotate-45" />
            </div>
            <div className="font-heading">
              <span className="text-3xl font-semibold tracking-wide text-primary">SPECIAL</span>
              <br />
              <span className="text-2xl font-light tracking-[0.35em] text-primary">TRAVEL</span>
            </div>
          </div>

          {/* Headline */}
          <div className="border-t-2 border-foreground pt-6 mb-12 max-w-md">
            <h1 className="font-heading text-2xl md:text-3xl font-semibold leading-snug">
              Exkluzivní a individuální cestování na nejvyšší úrovni.
            </h1>
          </div>

          {/* Guarantee */}
          <div className="mb-8">
            <h2 className="font-heading text-lg font-semibold mb-2">Naše garance:</h2>
            <p className="text-muted-foreground text-sm tracking-wide">
              soukromý přístup | důvěra | exkluzivita | zodpovědnost | záruka
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="font-heading text-lg font-semibold mb-2">Naše služby:</h2>
            <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
              soukromé lety | soukromé jachty | soukromé ostrovy | soukromé vily |
              <br />
              výletní lodě | exkluzivní místa & hotely | privátní concierge
            </p>
          </div>
        </div>

        {/* Contact & Footer */}
        <div>
          <div className="mb-8 text-sm leading-relaxed">
            <p className="font-semibold">SPECIAL TRAVEL</p>
            <p>ppm factum a.s.</p>
            <p>Bucharova 2657/12</p>
            <p>158 00 Praha 5</p>
            <p>Česká republika</p>
          </div>

          <div className="mb-8 text-sm">
            <p>
              e-mail:{" "}
              <a href="mailto:sales@specialtravel.cz" className="text-primary hover:underline">
                sales@specialtravel.cz
              </a>
            </p>
          </div>

          <div className="mb-8 text-xs text-muted-foreground">
            <p>IATA číslo registrace: 96220541</p>
          </div>

          <p className="font-heading text-base font-semibold italic">
            Žádné místo na zemi není téměř nemožné.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen">
        <img
          src={heroImage}
          alt="Exotická pláž s tyrkysovou vodou a loděmi"
          className="w-full h-full object-cover"
          width={1024}
          height={1536}
        />
      </div>
    </div>
  );
};

export default Index;
