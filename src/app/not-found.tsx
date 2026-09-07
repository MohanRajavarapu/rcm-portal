import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <PageHero
        title="That page is not on the map."
        lede="The cycle is still here—services, specialties, or a conversation."
      />
      <div className="mx-auto flex max-w-6xl gap-4 px-4 py-12 sm:px-6">
        <Link href="/" className="link-quiet underline-offset-4 hover:underline">
          Home
        </Link>
        <Link href="/contact" className="link-quiet underline-offset-4 hover:underline">
          Choose a contact path
        </Link>
      </div>
    </>
  );
}
