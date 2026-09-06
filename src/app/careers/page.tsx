import type { Metadata } from "next";
import { CareersContent } from "@/components/careers/careers-content";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${company.legalName}.`,
};

type Props = { searchParams: Promise<{ role?: string }> };

export default async function CareersPage({ searchParams }: Props) {
  const { role } = await searchParams;
  const defaultJobId = jobs.some((job) => job.id === role) ? role : jobs[0]?.id;

  return <CareersContent defaultJobId={defaultJobId} />;
}
