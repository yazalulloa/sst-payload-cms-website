import {NextRequest, NextResponse} from "next/server";


export async function middleware(request: NextRequest) {
  console.log("Current url:", request.url);

  return NextResponse.next();
}


export const config = {
  matcher: ['/:path*'], // Specify the routes the middleware applies to
};
