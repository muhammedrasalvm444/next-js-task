import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthenticated = req.cookies.get("authToken") || false;

  if (!isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
