import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const shipments = await prisma.shipment.findMany();
  return NextResponse.json(shipments);
}

export async function POST(req: Request) {
  const body = await req.json();

  const shipment = await prisma.shipment.create({
    data: {
      title: body.title,
      description: body.description,
      origin: body.origin,
      destination: body.destination,
      weight: body.weight,
      expeditorId: body.expeditorId,
      status: "PENDING",
    },
  });

  return NextResponse.json(shipment);
}