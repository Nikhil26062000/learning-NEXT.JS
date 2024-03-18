import { data } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// fetching all the data from the fake db
export function GET() {
  return NextResponse.json({ message: data });
}

//inserting the new user in db.js
export async function POST(req,res) {
  let { id, name, email, password,age } = await req.json();

  if (!id || !name || !email || !password || !age) {
    return NextResponse.json({ message: "Please fill all the details" });
  } else {
    data.push({ id: id, name: name, email: email, password, age: age });

    const updatedUserArray = data;

    const updatedData = JSON.stringify(updatedUserArray, null, 2);
     // Null is passed as the second argument to exclude any replacer function
            // 2 is passed as the third argument to specify 2 spaces for indentation

    fs.writeFileSync(
      "./app/util/db.js",
      `export const data = ${updatedData}`,
      "utf-8"
    );
  }

  return NextResponse.json({message:"User insert Successful"})
}
