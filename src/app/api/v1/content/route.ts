import { NextResponse } from "next/server";
import { getPublicContent } from "@/server/services/content-service";

export async function GET() {
  return NextResponse.json(getPublicContent());
}
