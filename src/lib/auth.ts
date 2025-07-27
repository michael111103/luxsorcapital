// src/lib/nextAuthOptions.ts
import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "./utils";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const userFromDb = await getUserByEmail(credentials.email);
        if (!userFromDb) return null;
        const isValid = await verifyPassword(
          credentials.password,
          userFromDb.password
        );
        if (!isValid) return null;
        // NextAuth.User hanya butuh id/email/name
        const user: User = {
          id: String(userFromDb.id),
          email: userFromDb.email,
          name: userFromDb.name,
        };
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      if (token.user) session.user = token.user as User;
      return session;
    },
  },
};
