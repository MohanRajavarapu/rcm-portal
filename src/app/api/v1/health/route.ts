import { NextResponse } from "next/server";
import { getPublicContent } from "@/server/services/content-service";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    service: "api-gateway",
    status: "ok",
    services: [
      "content-service",
      "lead-service",
      "career-service",
      "notification-service",
    ],
    content: getPublicContent().company.brandName,
  });
}
