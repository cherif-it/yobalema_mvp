import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const availability = await prisma.transportAvailability.findUnique({
    where: { id: params.id },
  });

  if (!availability) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(availability);
}