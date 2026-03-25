import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send via mailto as fallback (no backend)
    const subject = encodeURIComponent(t("contact.emailSubject"));
    const body = encodeURIComponent(
      `${t("contact.name.label")}: ${formData.name}\n${t("contact.email.label")}: ${formData.email}\n${t("contact.phone.label")}: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:sales@specialtravel.cz?subject=${subject}&body=${body}`;

    toast({
      title: t("contact.success.title"),
      description: t("contact.success.desc"),
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium">
            {t("contact.label")}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mt-4">
            {t("contact.title")}
          </h2>
          <p className="font-body text-muted-foreground font-light mt-4 max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name.placeholder")}
                  className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email.placeholder")}
                  className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.phone.placeholder")}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.message.placeholder")}
                className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? t("contact.sending") : t("contact.submit")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
