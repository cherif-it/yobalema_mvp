import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: { id: params.id },
    });

    if (!shipment) {
      return NextResponse.json({ error: "Shipment not found" }, { status: 404 });
    }

    const matches = await prisma.transportAvailability.findMany({
      where: {
        fromLocation: shipment.origin,
        toLocation: shipment.destination,
      },
      include: {
        transporter: true,
      },
    });

    return NextResponse.json({
      shipment,
      matches,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}