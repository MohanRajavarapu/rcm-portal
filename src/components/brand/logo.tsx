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
          "overflow-hidden rounded-md bg-[#061d21]",
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
            size === "footer" ? "h-16 sm:h-[4.75rem]" : "h-12 sm:h-14",
          )}
          priority
        />
      </span>
    </Link>
  );
}
