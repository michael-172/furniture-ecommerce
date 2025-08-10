import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

/**
 * i18n middleware instance from next-intl.
 */
const intlMiddleware = createMiddleware(routing);

/**
 * AUTH CONFIG (adjust as needed)
 * Assumptions:
 *  - Auth token stored in a cookie named `auth_token` (change AUTH_COOKIE if different)
 *  - Public (unauthenticated) routes: home, login, register
 *  - Auth pages should redirect away when already authenticated
 *  - Protected sections start with any of PROTECTED_PREFIXES (after the locale segment)
 */
const AUTH_COOKIE = "auth_token"; // <-- change if your cookie name differs

// Routes accessible without authentication (after locale prefix)
const PUBLIC_PATHS = ["/", "/login", "/register"]; // add "/forgot-password" etc.

// Prefixes that require authentication (after locale prefix)
const PROTECTED_PREFIXES = ["/account", "/cart"]; // extend as you add sections

function stripLocale(pathname: string): { locale: string; path: string } {
  // Create a mutable copy of locales from routing config
  const locales = [...routing.locales];
  const parts = pathname.split("/").filter(Boolean); // remove empty
  const first = parts[0];
  if (first && (locales as ReadonlyArray<string>).includes(first)) {
    const locale = first as (typeof locales)[number];
    const rest = "/" + parts.slice(1).join("/");
    return { locale, path: rest === "/" ? "/" : rest };
  }
  return { locale: routing.defaultLocale, path: pathname };
}

function isPublicPath(path: string) {
  return PUBLIC_PATHS.includes(path);
}

function isProtectedPath(path: string) {
  if (isPublicPath(path)) return false;
  return PROTECTED_PREFIXES.some((p) => path === p || path.startsWith(p + "/"));
}

export default function middleware(req: NextRequest) {
  // Run i18n middleware first to ensure locale handling (may rewrite path)
  const intlResponse = intlMiddleware(req);

  // Clone URL AFTER intl so we operate on the localized path
  const url = req.nextUrl.clone();
  const { locale, path } = stripLocale(url.pathname);
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  const isAuthPage = path === "/login" || path === "/register";
  const needsAuth = isProtectedPath(path);

  // Unauthenticated user trying to access protected content -> redirect to login
  if (!token && needsAuth) {
    url.pathname = `/${locale}/login`;
    url.searchParams.set("next", path); // preserve intended destination
    return NextResponse.redirect(url);
  }

  // Authenticated user visiting auth pages -> redirect away (dashboard or home)
  if (token && isAuthPage) {
    // const target = PROTECTED_PREFIXES[0] || "/";
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Allow public & already-handled paths to continue (reuse intl response to keep headers)
  return intlResponse;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. static files)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
