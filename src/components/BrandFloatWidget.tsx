import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LogoMark } from "@/components/LogoMark";

const BrandFloatWidget = () => {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const base = `/${lang ?? "en"}`;

  return (
    <Link
      to={{ pathname: base, hash: "contact" }}
      className="group fixed bottom-6 right-6 z-40 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={t("widget.contactAria")}
    >
      <LogoMark
        size="lg"
        aria-hidden
        className="border-border bg-popover/95 shadow-lg shadow-black/35 backdrop-blur-md transition-[border-color,box-shadow] group-hover:border-primary/45 group-hover:shadow-[0_12px_40px_-12px_hsl(43_80%_55%/0.35)]"
      />
    </Link>
  );
};

export default BrandFloatWidget;
