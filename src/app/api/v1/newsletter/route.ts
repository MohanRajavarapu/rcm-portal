import { NextResponse } from "next/server";
import { subscribeNewsletter } from "@/server/services/notification-service";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const email = (body as { email?: string }).email ?? "";
  const result = await subscribeNewsletter(email);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
