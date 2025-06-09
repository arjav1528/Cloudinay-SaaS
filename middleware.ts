import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  "/",
  "/home"
]);

const isPublicApiRoute = createRouteMatcher([
  "/api/videos"
]);
export default clerkMiddleware(async (auth, req) => {

    const {userId} = await auth();
    const currentUrl = new URL(req.url);
    const isHomePage = currentUrl.pathname === "/home";
    const isApiPath = currentUrl.pathname.startsWith("/api");

    if(userId && isPublicRoute(req) && !isHomePage){
        return NextResponse.redirect(new URL("/home", req.url));
    }

    if(!userId){
        if(!isPublicRoute && !isPublicApiRoute(req)){
            return NextResponse.redirect(new URL("/", req.url));
        }
        
        if(isApiPath && !isPublicApiRoute(req)){
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }

        if(!isPublicRoute(req)){
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    return NextResponse.next();
    
  
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}