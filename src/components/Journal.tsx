import { motion } from "framer-motion";
import { img, journal } from "../data";
import SectionHeader from "./SectionHeader";

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title={<>Recent <span className="italic">thoughts</span></>}
          sub="Topics I'm exploring across engineering, software, AI and entrepreneurship."
          cta="View all"
          ctaHref="#journal"
        />
        <div className="space-y-4">
          {journal.map((j, i) => (
            <motion.a
              key={j.title}
              href="#journal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors"
            >
              <img src={img(j.seed, 200, 200)} alt="" loading="lazy" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-display italic truncate">{j.title}</h3>
                <p className="text-xs text-muted sm:hidden mt-1">{j.read}</p>
              </div>
              <span className="hidden sm:block text-xs text-muted">{j.read}</span>
              <span className="hidden sm:block text-xs text-muted uppercase tracking-[0.2em] pr-4">{j.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
