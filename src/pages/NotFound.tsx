import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/config";
import { AppLink } from "@/components/AppLink";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const segments = location.pathname.split("/").filter(Boolean);
  const langSegment = segments.find((s) => s === "en" || s === "fr");
  const lang = langSegment === "fr" ? "fr" : "en";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    void i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <AppLink routerPath={`/${lang}`} className="text-primary underline hover:text-primary/90">
          {t("notFound.homeLink")}
        </AppLink>
      </div>
    </div>
  );
};

export default NotFound;
