import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: {
      shipment: true,
      availability: true,
    },
  });

  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  const body = await req.json();

  const booking = await prisma.booking.create({
    data: {
      shipmentId: body.shipmentId,
      availabilityId: body.availabilityId,
      status: "PENDING",
    },
  });

  return NextResponse.json(booking);
}