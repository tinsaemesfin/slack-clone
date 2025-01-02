import { convexAuthNextjsMiddleware,createRouteMatcher, nextjsMiddlewareRedirect} from "@convex-dev/auth/nextjs/server";
 const isPublicPage=createRouteMatcher(["/auth"])

 export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
    if (!isPublicPage(request) && !(await convexAuth.isAuthenticated())) {
        return nextjsMiddlewareRedirect(request, "/auth");
      }
      if (isPublicPage(request) && (await convexAuth.isAuthenticated())) {
        return nextjsMiddlewareRedirect(request, "/");
      }
      // TODO: Redirect from /auth if user is already authenticated
      
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};