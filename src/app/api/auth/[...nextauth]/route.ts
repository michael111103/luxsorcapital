// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import { nextAuthOptions } from "../../../../lib/nextAuthOptions";

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
