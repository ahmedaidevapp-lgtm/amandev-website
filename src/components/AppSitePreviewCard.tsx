import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

type AppSitePreviewCardProps = {
  href: string;
  hostname: string;
  title: string;
  description: string;
};

export function AppSitePreviewCard({
  href,
  hostname,
  title,
  description,
}: AppSitePreviewCardProps) {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:border-primary/40 hover:bg-card/55 hover:shadow-[0_28px_56px_-28px_hsl(43_80%_55%/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        </span>
        <div className="ml-2 flex min-w-0 flex-1 items-center rounded-md border border-border/90 bg-background/70 px-3 py-1.5">
          <span className="truncate font-mono text-xs text-foreground/65">{hostname}</span>
        </div>
      </div>

      <div className="relative isolate h-[220px] w-full overflow-hidden bg-card md:h-[270px]">
        <iframe
          src={href}
          title={t("previewCard.livePreview", { title })}
          className="pointer-events-none absolute left-0 top-0 h-[920px] w-[1440px] origin-top-left scale-[0.22] border-0 select-none md:h-[980px] md:w-[1536px] md:scale-[0.265]"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card from-[18%] via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-border p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {title}
          </h2>
          <ExternalLink
            className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden
          />
        </div>
        <p className="text-sm leading-relaxed text-foreground/80 md:text-[0.9375rem]">
          {description}
        </p>
        <span className="mt-auto pt-2 text-sm font-medium text-primary">
          {t("previewCard.visitSite")}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </a>
  );
}
