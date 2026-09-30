import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data";
import GradientButton from "./GradientButton";
import { useHls } from "./useHls";

const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "Phone", href: `tel:${profile.phone}` },
];

export default function Contact() {
  const videoRef = useHls(profile.hls);
  const marquee = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.to(marquee.current, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    return () => { tween.kill(); };
  }, []);

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <div className="overflow-hidden whitespace-nowrap mb-16">
          <div ref={marquee} className="inline-flex text-6xl md:text-9xl font-display italic text-text-primary/80">
            {Array.from({ length: 10 }, (_, i) => <span key={i} className="pr-8">BUILDING THE FUTURE •</span>)}
          </div>
        </div>
        <div className="text-center px-6 mb-20">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Let's build something</p>
          <GradientButton href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></GradientButton>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stroke pt-8">
          <div className="flex gap-6 text-sm text-muted">
            {socials.map((s) => <a key={s.label} href={s.href} className="hover:text-text-primary transition-colors">{s.label}</a>)}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </section>
  );
}
