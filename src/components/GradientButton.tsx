import { ReactNode } from "react";

type Props = { children: ReactNode; href?: string; onClick?: () => void; className?: string };

/** Pill button with an accent-gradient ring that appears on hover. */
export default function GradientButton({ children, href, onClick, className = "" }: Props) {
  const inner = (
    <>
      <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-surface border border-stroke group-hover:border-transparent px-6 py-3 text-sm">
        {children}
      </span>
    </>
  );
  const cls = `group relative inline-flex rounded-full ${className}`;
  return href ? (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>
  ) : (
    <button onClick={onClick} className={cls}>{inner}</button>
  );
}
