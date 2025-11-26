import { betterAuth } from "better-auth";
import { env } from "@/env";

export const auth = betterAuth({
  // Email/password can be enabled later; start with Google for YouTubers.
  socialProviders: {
    google: {
      clientId: env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
      // Scopes focused on read-only YouTube + profile; refine later as needed.
      scope: [
        "openid",
        "profile",
        "email",
        "https://www.googleapis.com/auth/youtube.readonly",
      ],
    },
  },
});

export type AuthInstance = typeof auth;


