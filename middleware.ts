import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the session cookie
  const sessionCookie = request.cookies.get('appwrite-session');
  const hasSession = !!sessionCookie?.value;

  // Public routes that don't require authentication
  const publicRoutes = ['/sign-in', '/sign-up', '/'];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Protected routes that require authentication
  const protectedRoutes = ['/(root)', '/my-banks', '/payment-transfer', '/transaction-history'];
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route.replace('/(root)', ''))
  );

  // If user doesn't have a session and tries to access protected route
  if (!hasSession && (pathname.startsWith('/my-banks') || pathname.startsWith('/payment-transfer') || pathname.startsWith('/transaction-history'))) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // If user doesn't have a session and tries to access home page, redirect to sign-in
  if (!hasSession && pathname === '/') {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // If user has a session and is on auth pages, redirect to home
  if (hasSession && (pathname === '/sign-in' || pathname === '/sign-up')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
