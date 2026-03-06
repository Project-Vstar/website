import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host");

  // 1. EXIT EARLY: If this is an API route, do not rewrite it!
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 2. Shop
  if (hostname === "shop.vstarproject.eu" || hostname === "shop.localhost:3000") {
    return NextResponse.rewrite(new URL("/shop" + pathname, request.url));
  }

  // 3. Vinfernia
  if (hostname === "vinfernia.vstarproject.eu" || hostname === "vinfernia.localhost:3000") {
    return NextResponse.rewrite(
      new URL("/vinfernia" + (pathname || "/"), request.url)
    );
  }

  // 4. VStar
  if (hostname === "vstar.vstarproject.eu" || hostname === "vstar.localhost:3000") {
    return NextResponse.rewrite(
      new URL("/vstar" + (pathname || "/"), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};