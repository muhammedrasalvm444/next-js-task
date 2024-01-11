import { NextResponse } from "next/server";

export function middleware(req) {
  // Check if the user is authenticated (replace with your logic)
  const isAuthenticated = req.cookies.get("authToken") || false; // Example using a cookie

  if (!isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/login"; // Set the redirect path
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
