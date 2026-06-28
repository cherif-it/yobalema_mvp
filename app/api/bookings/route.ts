import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        shipment: true,
        transporter: true,
        transportAvailability: true,
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const booking = await prisma.booking.create({
      data: {
        shipmentId: body.shipmentId,
        transporterId: body.transporterId,
        transportAvailabilityId: body.transportAvailabilityId,
        status: "PENDING",
      },
      include: {
        shipment: true,
        transporter: true,
        transportAvailability: true,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create booking" },
      { status: 500 }
    );
  }
}