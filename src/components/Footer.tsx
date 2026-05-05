import { useTranslation } from "react-i18next";
import { LogoMark } from "@/components/LogoMark";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex items-center justify-center px-6 md:justify-start">
        <div className="flex items-center gap-3">
          <LogoMark size="sm" aria-hidden />
          <p className="font-mono text-sm text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
