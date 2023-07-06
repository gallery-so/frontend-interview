import { NextResponse } from "next/server";
import { MOCK_ASSETS } from "@/types";

export function GET() {
  return NextResponse.json(MOCK_ASSETS);
}
