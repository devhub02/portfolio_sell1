import { motion } from "framer-motion";
import { profile, skillGroups } from "../data";
import SectionHeader from "./SectionHeader";
import GradientButton from "./GradientButton";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8 },
};

export default function Resume() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Resume"
          title={<>Experience & <span className="italic">skills</span></>}
          sub={profile.summary}
          cta="Download resume"
          ctaHref={profile.resume}
        />
        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          <motion.div {...fade} className="md:col-span-7 bg-surface/30 border border-stroke rounded-3xl p-6 md:p-8">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Experience</p>
            <div className="flex justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-2xl font-display italic">Mechanical Engineer & Product Development</h3>
                <p className="text-sm text-muted mt-1">TripG · Gaya</p>
              </div>
              <span className="text-xs text-muted uppercase tracking-[0.2em] pt-2">09/2026 – Current</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted list-disc pl-5">
              <li>Contributed to the development of TripG, a technology-driven travel product, with focus on product vision and development.</li>
              <li>Developed startup vision and business model for the new venture.</li>
              <li>Worked across product planning, UI/UX, technical analysis, and software development activities.</li>
            </ul>
          </motion.div>

          <motion.div {...fade} className="md:col-span-5 bg-surface/30 border border-stroke rounded-3xl p-6 md:p-8">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Education & Training</p>
            <h3 className="text-2xl font-display italic">Purnea College of Engineering</h3>
            <p className="text-sm text-muted mt-1">Purnea, Bihar</p>
            <p className="text-sm text-muted mt-5">B.Tech / Bachelor's Degree in Mechanical Engineering</p>
            <p className="text-sm text-muted mt-2">Some College (No Degree) in Mechanical Engineering</p>
          </motion.div>

          {skillGroups.map((g) => (
            <motion.div key={g.title} {...fade} className="md:col-span-4 bg-surface/30 border border-stroke rounded-3xl p-6">
              <p className="text-xs text-muted uppercase tracking-[0.2em] mb-4">{g.title}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="text-xs rounded-full border border-stroke bg-surface px-3 py-1.5 hover:border-[#4E85BF] transition-colors">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden mt-8"><GradientButton href={profile.resume}>Download resume <span>↓</span></GradientButton></div>
      </div>
    </section>
  );
}
