import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  session: {
    strategy: 'jwt', // Essencial para evitar o loop de banco de dados
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // 1. Salva o ID do usuário do Prisma no JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // 2. Repassa o ID do JWT para a Sessão (acessível no front-end)
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
    // 3. O "MATADOR DE LOOPS": Força o redirecionamento para a dashboard
    async redirect({ url, baseUrl }) {
      // Se o usuário já estiver na dashboard, não redireciona infinitamente
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/dashboard`;
    },
  },
  pages: { 
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}