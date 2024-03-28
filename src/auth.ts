import NextAuth from "next-auth";
import clientPromise from "./DB/connection";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  ...authConfig,
});
