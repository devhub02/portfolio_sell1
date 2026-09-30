import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { explorations, img, profile } from "../data";
import GradientButton from "./GradientButton";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const section = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: section.current, start: "top top", end: "bottom bottom", pin: content.current, pinSpacing: false });
      gsap.fromTo(".col-a", { y: 120 }, { y: -160, ease: "none", scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo(".col-b", { y: 320 }, { y: -40, ease: "none", scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: true } });
    }, section);
    return () => ctx.revert();
  }, []);

  const card = (i: number) => {
    const e = explorations[i];
    return (
      <button
        key={e.seed}
        onClick={() => setOpen(i)}
        className="group relative block w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface transition-transform duration-500 hover:scale-105"
        style={{ rotate: `${i % 2 ? 3 : -3}deg` }}
      >
        <img src={img(e.seed, 640, 640)} alt={e.label} loading="lazy" className="w-full h-full object-cover" />
        <span className="absolute left-4 bottom-4 text-xs uppercase tracking-[0.2em] text-white/90 drop-shadow">{e.label}</span>
      </button>
    );
  };

  return (
    <section id="explorations" ref={section} className="relative bg-bg min-h-[300vh]">
      <div ref={content} className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          <span className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-5xl md:text-7xl font-display leading-none">Visual <span className="italic">playground</span></h2>
        <p className="text-sm md:text-base text-muted mt-4 mb-8 max-w-md">The tools I use daily — CAD, code, design and AI.</p>
        <GradientButton href={profile.github}>GitHub <span>↗</span></GradientButton>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 pt-[40vh] grid grid-cols-2 gap-12 md:gap-40">
          <div className="col-a space-y-16 md:space-y-32 pointer-events-auto flex flex-col items-start">
            {[0, 2, 4].map(card)}
          </div>
          <div className="col-b space-y-16 md:space-y-32 pointer-events-auto flex flex-col items-end">
            {[1, 3, 5].map(card)}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <img src={img(explorations[open].seed, 1200, 1200)} alt={explorations[open].label} className="max-h-[85vh] max-w-full rounded-3xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
