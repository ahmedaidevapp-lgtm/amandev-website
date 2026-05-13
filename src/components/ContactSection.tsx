import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const questionsMailto = `mailto:support@amandevtech.com?subject=${encodeURIComponent(t("cta.questionsSubject"))}`;

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to unlock your
              <br />
              <span className="text-gradient">data potential?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              Whether you need a full data platform or a quick audit, we'd love
              to hear about your challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:support@amandevtech.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              support@amandevtech.com
            </a>
            <a
              href={questionsMailto}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary/50 transition-colors"
            >
              {t("cta.askQuestions")}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary/50 transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;