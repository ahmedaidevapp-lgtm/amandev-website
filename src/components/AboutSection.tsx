import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Data obsessed,
              <br />
              <span className="text-gradient">results driven</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 8 years in the data space, I've helped startups and enterprises
                alike transform their data capabilities — from building first data warehouses
                to deploying production ML pipelines.
              </p>
              <p>
                I believe great data work sits at the intersection of engineering rigor,
                business acumen, and design thinking. Every pipeline I build, every dashboard
                I design, serves a clear business objective.
              </p>
              <p>
                When I'm not wrangling data, you'll find me writing about modern data stack
                trends, mentoring aspiring data professionals, or experimenting with the
                latest AI tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Languages", items: ["Python", "SQL", "Scala", "TypeScript"] },
                { label: "Platforms", items: ["AWS", "GCP", "Azure", "Databricks"] },
                { label: "Tools", items: ["dbt", "Airflow", "Spark", "Kafka"] },
                { label: "Viz", items: ["Tableau", "Looker", "Power BI", "Metabase"] },
              ].map((group) => (
                <div
                  key={group.label}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <p className="font-mono text-xs text-primary uppercase tracking-wider mb-3">
                    {group.label}
                  </p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-secondary-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;