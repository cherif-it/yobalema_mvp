export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";

// ➜ CREATE booking
export async function POST(req: Request) {
  const body = await req.json();

  const booking = await prisma.booking.create({
    data: {
      shipmentId: body.shipmentId,
      transporterId: body.transporterId,
      status: "PENDING",
    },
  });

  return Response.json(booking);
}

// ➜ GET all bookings
export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: {
      Shipment: true,
      User: true,
    },
  });

  return Response.json(bookings);
}