import {NextRequest, NextResponse} from "next/server";
import {verifyAuth} from "./lib/auth";


export async function middleware(req: NextRequest) {
   console.log("Working")
   const token = req.cookies.get('user-token')?.value

   const verifiedToken = token && (
       await verifyAuth(token).catch((err : Error) => {
          console.log(err)
       })
   )

   if(req.nextUrl.pathname.startsWith('/login') && !verifiedToken) {
      return
   }

   if(req.url.includes('/login') && verifiedToken) {
      return NextResponse.redirect(new URL('/'))
   }

   if(!verifiedToken) {
         return NextResponse.redirect(new URL('/login', req.url))
   }
}

export const config = {
   matcher: ['/orders','/saved', '/dash']
}
