import Link from "next/link";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

export function Logo({
  className,
  light = false,
  size = "header",
}: {
  className?: string;
  light?: boolean;
  size?: "header" | "footer";
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="360 VertexAI home"
    >
      <span
        className={cn(
          "block rounded-md bg-[#0b0c10]",
          light ? "ring-1 ring-white/10" : "ring-1 ring-white/8",
        )}
      >
        {/* Native img so GitHub Pages basePath is applied once (next/image would prefix again). */}
        <img
          src={withBasePath("/brand/logo.jpg")}
          alt="360 VertexAI — Intelligent Automation"
          className={cn(
            "h-11 w-auto max-w-[min(220px,58vw)] object-contain object-left sm:h-[44px]",
            size === "footer" && "h-7 max-w-[160px] sm:h-8",
          )}
        />
      </span>
    </Link>
  );
}
