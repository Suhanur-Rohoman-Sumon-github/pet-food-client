import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getCurrentUser } from "./service/authServices";

const authRoutes = ["/login", "/register"];

const protectedRoutes = [
  "/cart",
  "/wishList",
  "/vendor", // Protect vendor routes
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  // Redirect unauthenticated users from protected routes
  if (!user && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // Redirect authenticated users away from login/register routes
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Ensure only specific roles (e.g., vendors) can access the /vendor route
  if (pathname.startsWith("/vendor") && user?.role !== "vendor") {
    return NextResponse.redirect(new URL("/vendor/vendor-home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart",
    "/wishList",
    "/login",
    "/register",
    "/vendor/:path*", // Protect all /vendor routes
  ],
};
