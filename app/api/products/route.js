import { NextResponse } from "next/server";

export const GET = (req) => {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
};
