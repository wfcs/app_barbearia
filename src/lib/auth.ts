import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [],
    callbacks: {
        session({ session, user }) {
            // Add user role and tenantId to session if available
            // session.user.role = user.role
            // session.user.tenantId = user.tenantId
            return session
        },
    },
})
