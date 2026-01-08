import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Agar already /dashboard ya /auth page pe ho, allow
  // if (pathname.startsWith("/dashboard") || pathname.startsWith("/auth")) {
  //   return NextResponse.next();
  // }

  // // Baaki requests ko /dashboard redirect kro
  // return NextResponse.redirect(new URL("/dashboard", request.url));
}

export const config = {
  matcher: "/:path*", // har page pe middleware chalega
};
