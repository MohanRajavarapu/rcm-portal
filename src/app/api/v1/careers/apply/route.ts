import { NextResponse } from "next/server";
import { submitApplication, validateApplication } from "@/server/services/career-service";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const parsed = validateApplication(body as Record<string, string>);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 422 });
  }
  const application = await submitApplication(parsed.value, parsed.job);
  return NextResponse.json(
    { id: application.id, receivedAt: application.createdAt },
    { status: 201 },
  );
}
