import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "../data";
import Navbar from "./Navbar";
import { scrollToId, useHls } from "./useHls";

const roles = ["Mechanical", "Fullstack", "Founder", "Learner"];

export default function Hero() {
  const videoRef = useHls(profile.hls);
  const root = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 })
        .fromTo(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 }, 0.3);
    }, root);
    return () => ctx.revert();
  }, []);

  const btn = "relative group rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform";
  const ring = <span className="absolute -inset-[2px] -z-10 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />;

  return (
    <section id="home" ref={root} className="relative h-screen min-h-[640px] overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      <Navbar />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">Portfolio '26</p>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          {profile.name}
        </h1>
        <p className="blur-in text-lg md:text-2xl text-text-primary mb-4">
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> from Gaya, India.
        </p>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Mechanical engineer building technology-driven products — from SolidWorks models to React apps and startup vision.
        </p>
        <div className="blur-in inline-flex gap-4">
          <button onClick={() => scrollToId("work")} className={`${btn} bg-text-primary text-bg hover:bg-bg hover:text-text-primary`}>{ring}See Works</button>
          <button onClick={() => scrollToId("contact")} className={`${btn} border-2 border-stroke bg-bg text-text-primary hover:border-transparent`}>{ring}Reach out...</button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke overflow-hidden">
          <div className="w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
