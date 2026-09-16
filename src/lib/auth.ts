import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login", // ajusta pro caminho real da sua página de login
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // aqui é onde você já deve ter a lógica de
        // buscar o user no banco e comparar com bcrypt
        // return null se inválido, ou o objeto do user se válido
        const email = credentials?.email;
        const senha = credentials?.senha;

        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (!user || !user.senha) {
            return null;
          }
          if (!senha) {
            return null;
          }
          const senhahash = await bcrypt.compare(senha, user.senha);
          if (!senhahash) {
            return null;
          }
          return {
            id: user.id,
            email: user.email,
          };
        } catch (err) {
          console.error("nao autorizado", err);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt", // é isso que faz o NextAuth usar JWT + cookie automaticamente
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
