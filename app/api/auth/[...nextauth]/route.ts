import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          // 🔍 DEBUG INPUT
          if (!credentials?.email || !credentials?.password) {
            console.log("❌ Missing credentials");
            return null;
          }

          const email = credentials.email.toLowerCase().trim();
          const password = credentials.password;

          // 🔍 FIND USER
          const user = await prisma.user.findUnique({
            where: { email },
          });

          console.log("🔍 USER:", user?.email);

          if (!user) {
            console.log("❌ User not found");
            return null;
          }

          if (!user.password) {
            console.log("❌ No password in DB");
            return null;
          }

          // 🔐 COMPARE PASSWORD
          const isValid = await bcrypt.compare(password, user.password);

          console.log("🔐 PASSWORD VALID:", isValid);

          if (!isValid) {
            console.log("❌ Invalid password");
            return null;
          }

          // ✅ RETURN SAFE USER
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("🔥 AUTHORIZE ERROR:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };