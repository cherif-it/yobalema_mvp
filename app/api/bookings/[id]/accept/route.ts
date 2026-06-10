import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const booking = await prisma.booking.update({
    where: { id: params.id },
    data: { status: "ACCEPTED" },
  });

  return NextResponse.json(booking);
}