import type { NextRequest } from "next/server";
import { auth } from "./config";

export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
};

export type Session = {
  user: SessionUser;
};

export async function getSessionFromRequest(
  request: NextRequest,
): Promise<Session | null> {
  // The exact Better Auth API surface may evolve.
  // This helper centralizes the session lookup so we can adjust in one place.
  const betterAuthSession = await auth.getSession({
    request,
  });

  if (!betterAuthSession) {
    return null;
  }

  return {
    user: {
      id: betterAuthSession.user.id,
      email: betterAuthSession.user.email,
      name: betterAuthSession.user.name ?? null,
      imageUrl: betterAuthSession.user.image ?? null,
    },
  };
}


