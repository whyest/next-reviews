import { NextResponse } from "next/server";
import { searchReviews } from "@/lib/reviews";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  //   console.log("/api/search:", query);
  const reviews = await searchReviews(query);
  return NextResponse.json(reviews);
}
