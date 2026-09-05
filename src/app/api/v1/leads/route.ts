import { NextResponse } from "next/server";
import { createLead, leadAck, validateLead } from "@/server/services/lead-service";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const parsed = validateLead(body as Record<string, string>);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 422 });
  }
  const lead = await createLead(parsed.value);
  return NextResponse.json(leadAck(lead), { status: 201 });
}
