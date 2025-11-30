import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (password.length < 6) {
    return NextResponse.json({
      success: false,
      error: "Password must be at least 6 characters"
    });
  }

  return NextResponse.json({
    success: true,
    message: "Registration successful!"
  });
}
