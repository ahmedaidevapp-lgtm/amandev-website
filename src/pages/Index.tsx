import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ScrollToRouteHash } from "@/components/ScrollToRouteHash";

const SERVICE_BLOCKS = ["dashboards", "pipelines", "websites", "automation"] as const;

const Index = () => {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const base = `/${lang ?? "en"}`;
  const processSteps = t("process.steps", { returnObjects: true }) as string[];

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <ScrollToRouteHash />
      <section className="relative flex min-h-screen items-center overflow-hidden grid-pattern">
        <div className="absolute top-1/4 -left-32 h-96 w-96 animate-pulse-glow rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 -right-32 h-96 w-96 animate-pulse-glow rounded-full bg-accent/5 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container mx-auto px-6 pt-24">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mb-8 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              {t("hero.titleLine1")}
              <br />
              <span className="text-gradient">{t("hero.titleGradient")}</span>
            </h1>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("hero.lead")}
            </p>
            <p className="mb-8 text-muted-foreground">{t("hero.sublead")}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://cal.com/ahmed-el-ghazouani-jii6po"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("cta.bookMeeting")}
              </a>
              <a
                href={`mailto:ahmed.aidev.app@gmail.com?subject=${encodeURIComponent(t("cta.estimateSubject"))}`}
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
              >
                {t("cta.requestEstimate")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-border py-24 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {t("servicesOverview.title")}
          </h2>
          <p className="mb-12 max-w-3xl text-muted-foreground">{t("servicesOverview.intro")}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-semibold">{t("servicesCards.analysis.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("servicesCards.analysis.desc")}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-semibold">{t("servicesCards.engineering.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("servicesCards.engineering.desc")}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-semibold">{t("servicesCards.websites.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("servicesCards.websites.desc")}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-semibold">{t("servicesCards.apps.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("servicesCards.apps.desc")}</p>
              <Link
                to={`${base}/app-development`}
                className="mt-3 inline-block text-sm text-primary"
              >
                {t("servicesCards.apps.link")}
              </Link>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-semibold">{t("servicesCards.automation.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("servicesCards.automation.desc")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-28">
        <div className="container mx-auto space-y-10 px-6 md:space-y-12">
          {SERVICE_BLOCKS.map((key) => {
            const bullets = t(`serviceDetail.${key}.bullets`, {
              returnObjects: true,
            }) as string[];
            return (
              <article
                key={key}
                className="rounded-2xl border border-border bg-card/25 p-6 md:p-8"
              >
                <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                  {t(`serviceDetail.${key}.title`)}
                </h2>
                <p className="mb-6 leading-relaxed text-foreground/80">
                  {t(`serviceDetail.${key}.intro`)}
                </p>
                <p className="mb-3 font-semibold text-foreground">{t("common.whatYouGet")}</p>
                <ul className="mb-5 list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-foreground/80 marker:text-primary/70">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {t(`serviceDetail.${key}.footer`)}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="approach" className="border-t border-border py-24 md:py-28">
        <div className="container mx-auto px-6">
          <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:mb-10 md:text-4xl">
              {t("process.title")}
            </h2>
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {processSteps.map((step, i) => (
                <li
                  key={`${step}-${i}`}
                  className="relative flex flex-col rounded-xl border border-border/80 bg-background/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <span className="mb-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-xs font-semibold tabular-nums text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section id="faq" className="border-t border-border py-24 md:py-28">
        <div className="container mx-auto px-6">
          <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t("faq.title")}</h2>
            <div className="max-w-4xl space-y-6">
              <article>
                <h3 className="mb-2 font-semibold text-foreground">{t("faq.priceQ")}</h3>
                <p className="leading-relaxed text-foreground/80">{t("faq.priceA")}</p>
              </article>
              <article>
                <h3 className="mb-2 font-semibold text-foreground">{t("faq.needQ")}</h3>
                <p className="leading-relaxed text-foreground/80">{t("faq.needA")}</p>
              </article>
              <article>
                <h3 className="mb-2 font-semibold text-foreground">{t("faq.remoteQ")}</h3>
                <p className="leading-relaxed text-foreground/80">{t("faq.remoteA")}</p>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24 md:py-28">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            {t("contactSection.title")}
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cal.com/ahmed-el-ghazouani-jii6po"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("cta.bookMeeting")}
            </a>
            <a
              href={`mailto:ahmed.aidev.app@gmail.com?subject=${encodeURIComponent(t("cta.estimateSubject"))}`}
              className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              {t("cta.requestEstimate")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
