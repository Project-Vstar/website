import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host");
  const host = hostname?.split(":")[0]; // Strip port

  // 1. EXIT EARLY: If this is an API route, do not rewrite it!
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 2. Shop
  if (host === "shop.vstarproject.eu" || host === "shop.localhost") {
    return NextResponse.rewrite(new URL("/shop" + pathname, request.url));
  }

  // 3. Vinfernia
  if (host === "vinfernia.vstarproject.eu" || host === "vinfernia.localhost") {
    return NextResponse.rewrite(
      new URL("/vinfernia" + (pathname || "/"), request.url)
    );
  }

  // 4. VStar
  if (host === "vstar.vstarproject.eu" || host === "vstar.localhost") {
    return NextResponse.rewrite(
      new URL("/vstar" + (pathname || "/"), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};