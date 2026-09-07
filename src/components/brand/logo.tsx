import Link from "next/link";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

export function Logo({
  className,
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
      <span className="logo-mark">
        {/* Native img so GitHub Pages basePath is applied once (next/image would prefix again). */}
        <img
          src={withBasePath("/brand/logo.jpg")}
          alt="360 VertexAI — Intelligent Automation"
          className={cn(
            "h-9 w-auto max-w-[min(200px,52vw)] object-contain object-left sm:h-10",
            size === "footer" && "h-7 max-w-[150px] sm:h-8",
          )}
        />
      </span>
    </Link>
  );
}
