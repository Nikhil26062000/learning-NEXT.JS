import { NextResponse } from "next/server"


export function middleware(req){
    console.log('middleware ran')
    if(req.nextUrl.pathname !="/about"){
        return NextResponse.redirect(new URL('/about',req.url))
    }
    return NextResponse.json({message:"Successfully ran"});
}

export const config = {
    matcher:['/portfolio/:path*']
}