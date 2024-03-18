import { data } from "@/app/util/db";
import { NextResponse } from "next/server";

// Get specific data
export function GET(req, res) {
  try {
    // Extract the id parameter from the response parameters
    const { id } = res.params;

    // Check if the id parameter is missing
    if (!id) {
      throw new Error("ID parameter is missing");
    }

    // Find the user project with the specified id
    const userProject = data.find((project) => project.id === id);

    // If the user project is not found, throw an error
    if (!userProject) {
      throw new Error("User project not found");
    }

    // Return the user project as a JSON response
    return NextResponse.json({ userProject });
  } catch (error) {
    // Log any errors and return an Internal Server Error response
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

// Login functionality
export async function POST(req, res) {
  try {
    // Parse the JSON body of the request
    let temp = await req.json();

    // Destructure the parsed JSON body to get name, email, and password
    let { name, email, password } = temp;

    // Extract the id parameter from the response parameters
    let { id } = res.params;

    // Find the user with the specified id
    const userMain = data.find((user) => user.id === id);

    // If the user is not found, return a User not found message
    if (!userMain) return NextResponse.json({ message: "User not found !" });
 
    // Check if the provided credentials match the user's credentials
    if (
      name === userMain.name &&
      email === userMain.email &&
      password === userMain.password
    ) {
      // Return a Login Successful message
      return NextResponse.json({ message: "Login Successful" });
    } else {
      // Return an Invalid credentials message
      return NextResponse.json({ message: "Invalid credentials" });
    }
  } catch (error) {
    // If any errors occur during the execution of the handler, return the error message
    return NextResponse.json({ message: error });
  }
}
