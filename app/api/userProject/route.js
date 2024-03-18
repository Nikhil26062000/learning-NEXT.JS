

import {data} from "@/app/util/db"
import { NextResponse } from "next/server"

// fetching all the data from the fake db
export function GET(){
    return NextResponse.json({message: data})
}