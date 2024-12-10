import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getCurrentUser } from "./service/authServices";


const authRoutes = ["/login", "/register"];

const protectedRoutes = [
  "/cart", 
  "/wishList", 
   
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

 
  if (!user && protectedRoutes.some(route => pathname.startsWith(route))) {
   
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }

 
  if (user && authRoutes.includes(pathname)) {
  
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
  ],
};
