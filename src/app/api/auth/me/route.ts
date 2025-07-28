// src/app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "../../../../lib/nextAuthOptions";

export async function GET() {
  const session = await getServerSession(nextAuthOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  return NextResponse.json({ email: session.user.email });
}
