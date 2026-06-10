import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.transportAvailability.findMany({
    include: {
      transporter: true,
    },
  });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const availability = await prisma.transportAvailability.create({
    data: {
      fromLocation: body.fromLocation,
      toLocation: body.toLocation,
      departureDate: new Date(body.departureDate),
      capacity: body.capacity,
      notes: body.notes,
      transporterId: body.transporterId,
    },
  });

  return NextResponse.json(availability);
}