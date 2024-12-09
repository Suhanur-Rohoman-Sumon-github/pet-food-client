import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { getCurrentUser } from "./service/authServices";
import { protectedRoutes } from "./constant";


const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next(); 
    }

    
    return NextResponse.redirect(
      new URL(`/register?redirect=${pathname}`, request.url),
    );
  }

  
  if (user.role === "admin") {
    // Admin can access all routes
    return NextResponse.next();
  } else {
    
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", request.url));
    }

   
    if (protectedRoutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

 
  return NextResponse.next();
}

// See "Matching Paths" below
export const config = {
  matcher: [
    "/admin/:path*", 
    "/profile",
    "/",
    "/mypost",
    "/login",
    "/register",
    "/add-friends",
    "/my-favorite-posts",
  ],
};