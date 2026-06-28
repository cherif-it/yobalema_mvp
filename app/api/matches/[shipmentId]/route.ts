import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { shipmentId: string } }
) {
  const shipment = await prisma.shipment.findUnique({
    where: { id: params.shipmentId },
  });

  if (!shipment) {
    return NextResponse.json({ error: "Shipment not found" }, { status: 404 });
  }

  const matches = await prisma.transportAvailability.findMany({
    where: {
      capacity: {
        gte: shipment.weight,
      },
    },
    include: {
      transporter: true,
    },
  });

  return NextResponse.json({
    shipment,
    matches,
  });
}