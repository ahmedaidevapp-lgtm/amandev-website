import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import i18n from "@/i18n/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandFloatWidget from "@/components/BrandFloatWidget";

const LANGS = ["en", "fr"] as const;

export default function LangLayout() {
  const { lang } = useParams<{ lang: string }>();

  if (!LANGS.includes(lang as (typeof LANGS)[number])) {
    return <Navigate to="/en" replace />;
  }

  const safe = lang as "en" | "fr";

  useEffect(() => {
    void i18n.changeLanguage(safe);
    document.documentElement.lang = safe;
  }, [safe]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BrandFloatWidget />
    </>
  );
}
