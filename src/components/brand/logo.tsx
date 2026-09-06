import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
          "overflow-hidden rounded-md bg-[#0b0c10]",
          light ? "ring-1 ring-white/10" : "ring-1 ring-white/8",
        )}
      >
        <Image
          src="/brand/logo.jpg"
          alt="360 VertexAI — Intelligent Automation"
          width={770}
          height={667}
          className={cn(
            "w-auto object-contain object-center",
            size === "footer" ? "h-7 sm:h-8" : "h-11 sm:h-[44px]",
          )}
          priority={size === "header"}
        />
      </span>
    </Link>
  );
}
