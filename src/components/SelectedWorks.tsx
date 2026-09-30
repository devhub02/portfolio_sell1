import { motion } from "framer-motion";
import { img, projects } from "../data";
import SectionHeader from "./SectionHeader";

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Featured <span className="italic">projects</span></>}
          sub="Product, engineering and software work — from concept to launch."
          cta="View all work"
          ctaHref="#resume"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#resume"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl ${p.span} ${p.ratio}`}
            >
              <img src={img(p.seed)} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
              <div className="absolute left-5 bottom-5 text-xs text-white/80 uppercase tracking-[0.2em] drop-shadow">{p.tag}</div>
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-500 flex items-center justify-center">
                <span className="relative rounded-full p-[2px] animated-gradient">
                  <span className="block rounded-full bg-white text-black px-6 py-3 text-sm">
                    View — <span className="font-display italic">{p.title}</span>
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
