import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="container mx-auto px-6 pt-24">
            <div className="max-w-4xl">
              <p className="font-mono text-sm text-primary tracking-widest uppercase mb-6">
                Freelance data & automation—dashboards to apps. Clear scope, documented handoffs.
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
                Data, dashboards, and apps
                <br />
                <span className="text-gradient">built for clarity and maintenance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                I help organizations move from messy data and manual work to clear metrics,
                light-weight pipelines, and small apps that fit how you already operate.
                Engagements are scoped for outcomes: documented deliverables, sensible defaults,
                and no mystery stack.
              </p>
              <p className="text-muted-foreground mb-8">
                Fixed milestones where it helps, transparent estimates, and deliverables you own
                (code, repos, docs).
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  Book a 20-minute discovery call
                </a>
                <a
                  href="#"
                  className="px-8 py-3.5 border border-border text-foreground font-medium rounded-full hover:border-primary/50 transition-colors text-sm"
                >
                  Request a written estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 md:py-28 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Services overview
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              We work with a data-first mindset: fewer moving parts, explicit assumptions, and
              handoffs your team can run. We can own discovery through delivery or embed alongside
              your developers for a defined slice.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <article className="p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold mb-2">Analysis & dashboards</h3>
                <p className="text-sm text-muted-foreground">
                  Metrics and visuals that support real decisions.
                </p>
              </article>
              <article className="p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold mb-2">Practical data engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Pipelines and clean tables without platform overload.
                </p>
              </article>
              <article className="p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold mb-2">Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Credible, fast sites with SEO and analytics basics.
                </p>
              </article>
              <article className="p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold mb-2">Apps</h3>
                <p className="text-sm text-muted-foreground">
                  MVPs and internal tools with data in mind.
                </p>
                <Link to="/app-development" className="text-sm text-primary mt-3 inline-block">
                  Open dedicated app page
                </Link>
              </article>
              <article className="p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Reliable replacements for repetitive data and ops work.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 border-t border-border">
          <div className="container mx-auto px-6 space-y-10 md:space-y-12">
            <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Data analysis & dashboards</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Turn scattered spreadsheets and exports into decisions: clean metrics, interactive
                dashboards, and short narratives leadership can act on.
              </p>
              <p className="font-semibold mb-3 text-foreground">What you get</p>
              <ul className="text-sm text-foreground/80 space-y-2.5 mb-5 list-disc list-outside pl-5 marker:text-primary/70 leading-relaxed">
                <li>Clear questions and success metrics agreed up front</li>
                <li>Cleaned, documented datasets suitable for reuse</li>
                <li>
                  Dashboards (Looker Studio, Power BI, Tableau, or code-based stacks) wired to
                  your sources where possible
                </li>
                <li>A one-page summary for stakeholders on how to read it</li>
              </ul>
              <p className="text-sm text-foreground/80 leading-relaxed">
                If you can describe the decision you need to make, we can shape the analysis and
                dashboard around it.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Data pipelines & engineering (practical scope)
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Reliable, smaller-scale data plumbing: scheduled extracts, transforms, and loads
                so reporting and apps stay consistent without a full platform team.
              </p>
              <p className="font-semibold mb-3 text-foreground">What you get</p>
              <ul className="text-sm text-foreground/80 space-y-2.5 mb-5 list-disc list-outside pl-5 marker:text-primary/70 leading-relaxed">
                <li>
                  Simple, maintainable pipelines (scheduled jobs, cloud functions, lightweight
                  orchestration)
                </li>
                <li>Staging and curated layers with naming conventions your team can extend</li>
                <li>Basic monitoring with failure alerts, run logs, and recovery notes</li>
                <li>Documentation: source-to-target map, refresh frequency, owner checklist</li>
              </ul>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Share your sources and where numbers need to land; you will get a concrete
                pipeline design and effort range.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Websites for businesses and professionals
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Fast, clear sites that explain what you do, capture leads, and stay easy to
                update-built with modern stacks and sensible structure.
              </p>
              <p className="font-semibold mb-3 text-foreground">What you get</p>
              <ul className="text-sm text-foreground/80 space-y-2.5 mb-5 list-disc list-outside pl-5 marker:text-primary/70 leading-relaxed">
                <li>Structure and copy guidance (or integration with your writer)</li>
                <li>Responsive layout, accessibility basics, and performance-minded setup</li>
                <li>Contact forms, analytics hooks, and SEO foundations</li>
                <li>Deployment to your hosting with handoff docs</li>
              </ul>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Send examples of sites you like and your must-have sections; you will get a fixed
                page list and timeline.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card/25 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Data & process automation</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Replace repetitive copy-paste, file shuffling, and report assembly with dependable
                automation-logged, scheduled, and owned by your team.
              </p>
              <p className="font-semibold mb-3 text-foreground">What you get</p>
              <ul className="text-sm text-foreground/80 space-y-2.5 mb-5 list-disc list-outside pl-5 marker:text-primary/70 leading-relaxed">
                <li>Map of current manual steps and failure points</li>
                <li>Automated flows with clear inputs and outputs</li>
                <li>Notifications on success/failure and simple runbooks</li>
                <li>Optional admin view or spreadsheet control panel for non-developers</li>
              </ul>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Walk through one painful weekly task; you will get an automation sketch and effort
                estimate before any build commitment.
              </p>
            </article>
          </div>
        </section>

        <section id="approach" className="py-24 md:py-28 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Process</h2>
            <p className="text-muted-foreground max-w-4xl">
              Discovery - data access & quality check - metric definitions - build - review -
              handoff & optional refresh cadence.
            </p>
          </div>
        </section>

        <section id="faq" className="py-24 md:py-28 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">FAQ</h2>
            <div className="space-y-6 max-w-4xl">
              <article>
                <h3 className="font-semibold mb-2">How do you price?</h3>
                <p className="text-muted-foreground">
                  Mix of fixed packages for well-defined work and time-and-materials with caps for
                  exploration-heavy phases-always written before kickoff.
                </p>
              </article>
              <article>
                <h3 className="font-semibold mb-2">What do you need from me?</h3>
                <p className="text-muted-foreground">
                  Access to systems or sample data, a stakeholder for decisions, and examples of
                  good outputs where they exist.
                </p>
              </article>
              <article>
                <h3 className="font-semibold mb-2">Remote?</h3>
                <p className="text-muted-foreground">Yes-[your timezone] with overlap windows you prefer.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-28 border-t border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to scope your project?
            </h2>
            <p className="text-muted-foreground mb-8">
              You can paste each service block into dedicated pages and add stack badges (Python,
              SQL, dbt, BigQuery, React, Flutter) under "Tools I use" for each one.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Book a 20-minute discovery call
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground font-medium rounded-full hover:border-primary/50 transition-colors text-sm"
              >
                Request a written estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
