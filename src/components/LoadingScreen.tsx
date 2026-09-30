import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Design", "Create", "Inspire"];
const DURATION = 2700;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let raf = 0;
    let done: ReturnType<typeof setTimeout>;
    const start = performance.now();
    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / DURATION) * 100));
      setCount(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else done = setTimeout(onComplete, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(done); };
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg">
      <motion.span
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="absolute top-8 left-8 md:left-12 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.span>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10 right-8 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
        {String(count).padStart(3, "0")}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient origin-left"
          style={{ transform: `scaleX(${count / 100})`, boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)" }}
        />
      </div>
    </div>
  );
}
