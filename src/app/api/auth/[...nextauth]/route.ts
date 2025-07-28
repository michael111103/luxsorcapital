// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "../../../../lib/utils";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await getUserByEmail(credentials.email);
        if (!user) return null;

        const valid = await verifyPassword(credentials.password, user.password);
        if (!valid) return null;

        // NextAuth mengharapkan id: string
        return { id: String(user.id), email: user.email, name: user.name };
      },
    }),
  ],
  // Pakai JWT, literal 'jwt' harus dikenali sebagai const
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
