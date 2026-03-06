import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host");

  // Shop
  if (hostname === "shop.vstarproject.eu" || hostname === "shop.localhost:3000") {
    return NextResponse.rewrite(new URL("/shop", request.url));
  }

  // Vinfernia
  if (hostname === "vinfernia.vstarproject.eu" || hostname === "vinfernia.localhost:3000") {
    return NextResponse.rewrite(
      new URL("/vinfernia" + (request.nextUrl.pathname || "/"), request.url)
    );
  }

  // VStar
  if (hostname === "vstar.vstarproject.eu" || hostname === "vstar.localhost:3000") {
    return NextResponse.rewrite(
      new URL("/vstar" + (request.nextUrl.pathname || "/"), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};