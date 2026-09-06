"use client";

import { useSearchParams } from "next/navigation";
import { CareersContent } from "@/components/careers/careers-content";
import { jobs } from "@/content/jobs";

export function CareersContentWrapper() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const defaultJobId =
    role && jobs.some((job) => job.id === role) ? role : jobs[0]?.id;

  return <CareersContent defaultJobId={defaultJobId} />;
}