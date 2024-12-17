import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getCurrentUser } from "./service/authServices";

const authRoutes = ["/login", "/register"];

const protectedRoutes = {
  user: ["/cart", "/wishList"],
  vendor: ["/vendor"],
  admin: ["/admin"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  
  if (!user) {
    const isProtected = Object.values(protectedRoutes).flat().some((route) => pathname.startsWith(route));
    if (isProtected) {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }

  
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  
  const userRole = user?.role; // Assumes user object has 'role' field: 'user', 'vendor', or 'admin'

  
  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  
  if (pathname.startsWith("/vendor") && !["VENDOR", "ADMIN"].includes(userRole as string)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

 
  if (
    protectedRoutes.vendor.some((route) => pathname.startsWith(route)) &&
    userRole !== "VENDOR" &&
    userRole !== "ADMIN"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart",
    "/wishList",
    "/login",
    "/register",
    "/vendor/:path*", 
    "/admin/:path*",
  ],
};
