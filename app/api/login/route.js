import { NextResponse } from "next/server";

export async function  POST(req,res){
    const {email,password} =await req.json()
    if(!email || !password){
        return NextResponse.json({message:"Required field not found"},{status:404})
    }
        return NextResponse.json({message:"Login successful"})
    
    
}

  