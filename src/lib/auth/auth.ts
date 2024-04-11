import NextAuth from "next-auth"
import authConfig  from "./auth.config"
import { db } from "../database"
import { PrismaAdapter } from "@auth/prisma-adapter"


export const {
  handlers: { GET, POST },  
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
 ...authConfig,
})