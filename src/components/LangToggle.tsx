import { useLang } from "@/context/LangContext";

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "cs" ? "en" : "cs")}
      className="fixed top-6 right-6 z-50 bg-dark/80 backdrop-blur-sm text-cream font-body text-xs tracking-widest uppercase px-4 py-2 hover:bg-dark transition-colors duration-300 border border-cream/20"
      aria-label="Switch language"
    >
      {lang === "cs" ? "EN" : "CZ"}
    </button>
  );
};

export default LangToggle;
