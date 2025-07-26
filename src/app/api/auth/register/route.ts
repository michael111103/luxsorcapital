// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

interface Body {
  email?: string;
  password?: string;
  name?: string;
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();

    // basic validation
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const email = body.email.toLowerCase().trim();
    const password = body.password;
    const name = body.name?.trim();

    // check for existing user
    const existing = await prisma.user.findUnique({
      where: { email },
    });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 409 }
      );
    }

    // hash password
    const hashed = await bcrypt.hash(password, 12);

    // create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashed,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
