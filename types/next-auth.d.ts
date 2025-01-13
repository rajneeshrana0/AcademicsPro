// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    role: string; // Add the role property
  }

  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
    };
  }

  interface JWT {
    id: string;
    email: string;
    role: string;
  }
}