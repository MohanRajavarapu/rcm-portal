import { NextResponse } from "next/server";
import { listJobs } from "@/server/services/career-service";

export async function GET() {
  return NextResponse.json({ jobs: listJobs() });
}
