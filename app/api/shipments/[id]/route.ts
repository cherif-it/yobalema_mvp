import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET one shipment
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const shipment = await prisma.shipment.findUnique({
    where: { id: params.id },
    include: {
      expeditor: true,
      Booking: true,
    },
  });

  if (!shipment) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(shipment);
}

// UPDATE shipment
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const updated = await prisma.shipment.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        origin: body.origin,
        destination: body.destination,
        weight: body.weight ? Number(body.weight) : undefined,
        status: body.status,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}

// DELETE shipment
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.shipment.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}