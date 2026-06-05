export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";

// ➜ CREATE availability (POST)
export async function POST(req: Request) {
  const body = await req.json();

  const availability = await prisma.transportAvailability.create({
    data: {
      fromLocation: body.fromLocation,
      toLocation: body.toLocation,
      departureDate: new Date(body.departureDate),
      returnDate: body.returnDate ? new Date(body.returnDate) : null,
      capacity: body.capacity,
      notes: body.notes,
      transporterId: body.transporterId,
    },
  });

  return Response.json(availability);
}

// ➜ GET all availabilities
export async function GET() {
  const availabilities = await prisma.transportAvailability.findMany({
    include: {
      transporter: true,
      bookings: true,
    },
  });

  return Response.json(availabilities);
}