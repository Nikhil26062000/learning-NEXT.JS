import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ messagae: "This is backend"}, { status: "202" });
}
