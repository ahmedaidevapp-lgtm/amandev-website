import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppSitePreviewCard } from "@/components/AppSitePreviewCard";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-6">
            <h1 className="mb-12 text-4xl font-bold tracking-tight md:mb-16 md:text-6xl">
              Web & mobile-friendly applications
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
              <AppSitePreviewCard
                href="https://amantech.dev/"
                hostname="amantech.dev"
                title="Wishly by Amantech"
                description="Never miss a birthday—Wishly keeps personal reminders simple, with privacy-first positioning and apps on the stores."
              />
              <AppSitePreviewCard
                href="https://vitaflow-app.com/"
                hostname="vitaflow-app.com"
                title="VitaFlow"
                description="Turn lab reports into plain-language insights—track biomarkers over time, compare visits, and stay in control of your data."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
