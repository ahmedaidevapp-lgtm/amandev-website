import { useTranslation } from "react-i18next";
import { AppSitePreviewCard } from "@/components/AppSitePreviewCard";

const AppDevelopment = () => {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="bg-background pt-28">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <h1 className="mb-12 text-4xl font-bold tracking-tight md:mb-16 md:text-6xl">
            {t("appsPage.title")}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <AppSitePreviewCard
              href="https://amantech.dev/"
              hostname="amantech.dev"
              title="Wishly by Amantech"
              description={t("appsPage.wishlyDesc")}
            />
            <AppSitePreviewCard
              href="https://vitaflow-app.com/"
              hostname="vitaflow-app.com"
              title="VitaFlow"
              description={t("appsPage.vitaflowDesc")}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppDevelopment;
