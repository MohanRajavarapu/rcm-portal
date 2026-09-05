import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="360VERTEXAI home">
      <span className="relative grid size-9 place-items-center">
        <svg viewBox="0 0 40 40" className="size-9" aria-hidden>
          <circle
            cx="20"
            cy="20"
            r="16.5"
            fill="none"
            stroke={light ? "#E8C37A" : "currentColor"}
            strokeWidth="1.6"
            strokeDasharray="78 26"
            strokeLinecap="round"
            transform="rotate(-20 20 20)"
          />
          <path
            d="M20 9.5 L29.5 27.2 H10.5 Z"
            fill={light ? "#E8C37A" : "oklch(0.34 0.07 195)"}
            opacity="0.95"
          />
          <circle cx="20" cy="20.5" r="2.1" fill={light ? "#0E2A33" : "oklch(0.975 0.012 88)"} />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.95rem] tracking-tight",
            light ? "text-white" : "text-foreground",
          )}
        >
          360VERTEXAI
        </span>
        <span className={cn("mt-0.5 text-[0.65rem] tracking-[0.14em] uppercase", light ? "text-white/60" : "text-muted-foreground")}>
          Solutions
        </span>
      </span>
    </Link>
  );
}
