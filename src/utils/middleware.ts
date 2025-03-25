import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";

  const protectedRoutes = ["/dashboard", "/services"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      // Verificar si el usuario tiene acceso a la ruta solicitada
      if (
        request.nextUrl.pathname === "/dashboard" &&
        decodedToken.role !== "admin"
      ) {
        return NextResponse.redirect(new URL("/services", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/services", "/auth/login"],
};
