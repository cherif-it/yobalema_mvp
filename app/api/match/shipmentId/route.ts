export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ shipmentId: string }> }
) {
  const { shipmentId } = await params;

  const shipment = await prisma.shipment.findUnique({
    where: {
      id: shipmentId,
    },
  });

  if (!shipment) {
    return Response.json(
      { error: "Shipment not found" },
      { status: 404 }
    );
  }

  const matches = await prisma.transportAvailability.findMany({
    where: {
      fromLocation: shipment.origin,
      toLocation: shipment.destination,
      capacity: {
        gte: shipment.weight,
      },
    },
    include: {
      transporter: true,
    },
  });

  return Response.json({
    shipment,
    matches,
  });
}