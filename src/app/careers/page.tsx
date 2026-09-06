import type { Metadata } from "next";
import { Suspense } from "react";
import { CareersContentWrapper } from "@/components/careers/careers-content-wrapper";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${company.legalName}.`,
};

export const dynamic = "force-static";

export default function CareersPage() {
  return (
    <Suspense fallback={<div>Loading careers...</div>}>
      <CareersContentWrapper />
    </Suspense>
  );
}