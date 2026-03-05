import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host");

  if (hostname === "shop.vstarproject.eu") {
    return NextResponse.rewrite(new URL("/shop", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};