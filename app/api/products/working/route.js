import { NextResponse } from "next/server";

export const GET = (req) => {
  return NextResponse.json({ message: "It is working" }, { status: 200 });
};
