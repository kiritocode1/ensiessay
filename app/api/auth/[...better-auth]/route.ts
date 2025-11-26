import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/config";

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Delegate the request to Better Auth; this is a thin adapter layer.
  const url = new URL(request.url);

  // Better Auth typically inspects the path to route to the correct handler.
  const result = await auth.handleRequest({
    method: "POST",
    path: url.pathname,
    headers: Object.fromEntries(request.headers.entries()),
    body: await request.text(),
  });

  return new NextResponse(result.body, {
    status: result.status,
    headers: result.headers,
  });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);

  const result = await auth.handleRequest({
    method: "GET",
    path: url.pathname,
    headers: Object.fromEntries(request.headers.entries()),
  });

  return new NextResponse(result.body, {
    status: result.status,
    headers: result.headers,
  });
}


