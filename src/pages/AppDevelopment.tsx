import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-5">
              Freelance data and automation work: from dashboards and pipelines to websites and
              apps-clear scope, documented handoff, and outcomes you can use day to day.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
              Web & mobile-friendly applications
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Focused apps for internal tools, MVPs, and customer-facing products-scoped to ship,
              with room to grow.
            </p>
            <p className="text-muted-foreground mb-8">
              Fixed milestones where it helps, transparent estimates, and deliverables you own
              (code, repos, docs).
            </p>
            <div id="cta" className="flex flex-wrap gap-4">
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

        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">What you get</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Requirements workshop and thin slice to production</li>
              <li>Authentication and roles when needed</li>
              <li>API design or integration with your existing backend</li>
              <li>Sensible UI for the problem domain (not generic filler)</li>
              <li>Testing on critical paths and deployment pipeline basics</li>
            </ul>
          </div>
        </section>

        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">Typical projects</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Internal dashboards with workflows (approvals, assignments)</li>
              <li>Customer portals tied to your data</li>
              <li>MVPs to validate a product idea</li>
              <li>Companion apps alongside existing systems</li>
            </ul>
          </div>
        </section>

        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">Ideal for</h2>
            <p className="text-muted-foreground">
              Teams that have a defined user and workflow and want a build partner who also
              understands data.
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">Closing CTA</h2>
            <p className="text-muted-foreground mb-8">
              Describe the user, the main job-to-be-done, and any systems we must connect to; you
              will get a phased roadmap.
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

        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8">FAQ</h2>
            <div className="space-y-6">
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
      </main>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
