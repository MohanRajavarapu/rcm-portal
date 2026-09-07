import { NextResponse } from "next/server";
import { submitTalentPool, validateTalentPool } from "@/server/services/career-service";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const parsed = validateTalentPool(body as Record<string, string>);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 422 });
  }
  const record = await submitTalentPool(parsed.value);
  return NextResponse.json({ id: record.id, receivedAt: record.createdAt }, { status: 201 });
}
