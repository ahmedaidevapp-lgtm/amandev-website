import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LogoMark } from "@/components/LogoMark";

function swapLangInPath(pathname: string, target: "en" | "fr") {
  const segments = pathname.split("/").filter(Boolean);
  const i = segments.findIndex((s) => s === "en" || s === "fr");
  if (i !== -1) {
    const next = [...segments];
    next[i] = target;
    return `/${next.join("/")}`;
  }
  return `/${target}`;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const base = `/${lang ?? "en"}`;
  const activeLang = lang === "fr" ? "fr" : "en";

  const homeSections = useMemo(
    () =>
      [
        { labelKey: "nav.services", hash: "services" },
        { labelKey: "nav.approach", hash: "approach" },
        { labelKey: "nav.faq", hash: "faq" },
        { labelKey: "nav.contact", hash: "contact" },
      ] as const,
    [],
  );

  const appDevActive = location.pathname.includes("/app-development");

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <Link
        to={{ pathname: base, hash: "main-content" }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        {t("nav.skipToContent")}
      </Link>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to={base} className="flex items-center gap-3" aria-label={t("brand.homeAria")}>
          <LogoMark size="sm" aria-hidden />
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            amandev <span className="text-foreground">technologies</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex md:gap-8">
          {homeSections.map((link) => (
            <Link
              key={link.labelKey}
              to={{ pathname: base, hash: link.hash }}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            to={`${base}/app-development`}
            className={`text-sm transition-colors duration-300 ${
              appDevActive ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {t("nav.appDevelopment")}
          </Link>
          <div className="flex items-center gap-2 border-l border-border pl-6">
            <Link
              to={swapLangInPath(location.pathname, "en")}
              className={`text-xs font-semibold uppercase tracking-wider ${
                activeLang === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.english")}
            </Link>
            <span className="text-muted-foreground/50">·</span>
            <Link
              to={swapLangInPath(location.pathname, "fr")}
              className={`text-xs font-semibold uppercase tracking-wider ${
                activeLang === "fr" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.french")}
            </Link>
          </div>
          <a
            href="https://cal.com/ahmed-el-ghazouani-jii6po"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("nav.bookMeeting")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-4 border-t border-border bg-background px-6 py-4 md:hidden"
        >
          {homeSections.map((link) => (
            <Link
              key={link.labelKey}
              to={{ pathname: base, hash: link.hash }}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            to={`${base}/app-development`}
            onClick={() => setIsOpen(false)}
            className="block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {t("nav.appDevelopment")}
          </Link>
          <div className="flex gap-4 pt-2">
            <Link
              to={swapLangInPath(location.pathname, "en")}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold ${activeLang === "en" ? "text-primary" : "text-muted-foreground"}`}
            >
              {t("nav.english")}
            </Link>
            <Link
              to={swapLangInPath(location.pathname, "fr")}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold ${activeLang === "fr" ? "text-primary" : "text-muted-foreground"}`}
            >
              {t("nav.french")}
            </Link>
          </div>
          <a
            href="https://cal.com/ahmed-el-ghazouani-jii6po"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            {t("nav.bookMeeting")}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
