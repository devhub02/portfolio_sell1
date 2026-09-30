import { useEffect, useState } from "react";
import { profile } from "../data";
import { scrollToId } from "./useHls";

const links = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "Resume", id: "resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const mid = window.scrollY + window.innerHeight / 3;
      let cur = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= mid) cur = l.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const item = "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 ${scrolled ? "shadow-md shadow-black/10" : ""}`}>
        <button onClick={() => scrollToId("home")} aria-label="Home" className="group w-9 h-9 rounded-full accent-gradient p-[1px] transition-transform hover:scale-110">
          <span className="flex w-full h-full items-center justify-center rounded-full bg-bg font-display italic text-[13px]">{profile.initials}</span>
        </button>
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollToId(l.id)}
            className={`${item} ${active === l.id ? "text-text-primary bg-stroke/50" : "text-muted hover:text-text-primary hover:bg-stroke/50"}`}
          >
            {l.label}
          </button>
        ))}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        <button onClick={() => scrollToId("contact")} className="group relative rounded-full">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className={`${item} relative block bg-surface backdrop-blur-md text-text-primary`}>Say hi ↗</span>
        </button>
      </div>
    </nav>
  );
}
