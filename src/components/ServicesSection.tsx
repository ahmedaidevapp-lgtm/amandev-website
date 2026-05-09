import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Workflow, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust ETL/ELT pipelines, data warehouses, and lakehouses that scale with your business.",
    tags: ["Snowflake", "dbt", "Airflow", "Spark"],
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Transform messy data into clear dashboards and reports that drive real business decisions.",
    tags: ["Tableau", "Power BI", "Looker", "SQL"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deploy production-grade ML models for prediction, classification, and intelligent automation.",
    tags: ["Python", "TensorFlow", "MLflow", "LLMs"],
  },
  {
    icon: Workflow,
    title: "Data Strategy",
    description: "Design your data architecture, governance frameworks, and team workflows from the ground up.",
    tags: ["Architecture", "Governance", "Roadmaps"],
  },
  {
    icon: Shield,
    title: "Data Quality & Testing",
    description: "Implement monitoring, alerting, and testing to ensure your data is always accurate and reliable.",
    tags: ["Great Expectations", "dbt tests", "Monte Carlo"],
  },
  {
    icon: Zap,
    title: "Cloud & Infrastructure",
    description: "Optimize your cloud data stack for performance, cost efficiency, and security.",
    tags: ["AWS", "GCP", "Azure", "Terraform"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services that move the
            <br />
            <span className="text-gradient">needle on data</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-glow hover:glow transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;