import { motion } from "framer-motion";
import { ReactNode } from "react";
import GradientButton from "./GradientButton";

type Props = { eyebrow: string; title: ReactNode; sub: string; cta?: string; ctaHref?: string };

export default function SectionHeader({ eyebrow, title, sub, cta, ctaHref }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-end justify-between gap-6 mb-10 md:mb-14"
    >
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display leading-[1] tracking-tight">{title}</h2>
        <p className="text-sm md:text-base text-muted mt-4 max-w-md">{sub}</p>
      </div>
      {cta && (
        <GradientButton href={ctaHref} className="hidden md:inline-flex shrink-0">
          {cta} <span>→</span>
        </GradientButton>
      )}
    </motion.div>
  );
}
