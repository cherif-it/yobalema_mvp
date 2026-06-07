import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { shipmentId: string } }
) {
  const shipment = await prisma.shipment.findUnique({
    where: { id: params.shipmentId },
  });

  if (!shipment) {
    return Response.json(
      { error: "Shipment not found" },
      { status: 404 }
    );
  }

  const matches = await prisma.transportAvailability.findMany({
    where: {
      AND: [
        {
          fromLocation: shipment.origin,
        },
        {
          toLocation: shipment.destination,
        },
        {
          capacity: {
            gte: shipment.weight,
          },
        },
      ],
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