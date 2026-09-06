import { NextResponse } from "next/server";
import { listJobs } from "@/server/services/career-service";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ jobs: listJobs() });
}