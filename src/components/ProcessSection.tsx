import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a deep dive into your data landscape, business goals, and pain points.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "We design a tailored solution — selecting the right tools, patterns, and infrastructure.",
  },
  {
    number: "03",
    title: "Build",
    description: "Iterative development with continuous testing, documentation, and stakeholder demos.",
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description: "Deploy to production with monitoring in place, then optimize based on real-world usage.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How we'll <span className="text-gradient">work together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-gradient opacity-30 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;