import { motion } from "framer-motion";

const stats = [
  { value: "1", label: "Startup venture (TripG)" },
  { value: "25+", label: "Tools & technologies" },
  { value: "6", label: "Skill domains" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <div className="text-6xl md:text-8xl font-display">{s.value}</div>
            <div className="text-xs text-muted uppercase tracking-[0.2em] mt-3">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
