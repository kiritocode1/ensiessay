import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSessionFromRequest } from "./lib/auth/server";

const AUTHENTICATED_APP_PREFIX = "/(app)";
const PUBLIC_AUTH_PREFIX = "/(auth)";

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(PUBLIC_AUTH_PREFIX)) {
    return NextResponse.next();
  }

  if (!pathname.startsWith(AUTHENTICATED_APP_PREFIX)) {
    return NextResponse.next();
  }

  const session = await getSessionFromRequest(request);

  if (!session) {
    const signInUrl = new URL("/(auth)/sign-in", request.url);
    signInUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}


