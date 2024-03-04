import { decryptData } from "./utils/crypto";

export function middleware(request) {
  const encryptedCurrentUser = request.cookies.get("userSession")?.value;
  let currentUser = null;

  if (encryptedCurrentUser) {
    currentUser = decryptData(encryptedCurrentUser);
  }

  if (currentUser?.isAuth && request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/profile", request.url));
  }

  if (!currentUser?.isAuth && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/auth/signin", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
