import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET all shipments (avec expeditor + tri)
export async function GET() {
  const shipments = await prisma.shipment.findMany({
    include: {
      expeditor: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(shipments);
}

// CREATE shipment (SECURISÉ avec session)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const shipment = await prisma.shipment.create({
      data: {
        title: body.title,
        description: body.description,
        origin: body.origin,
        destination: body.destination,
        weight: Number(body.weight),

        // 🔥 IMPORTANT : on ne prend PLUS expeditorId du frontend
        expeditorId: session.user.id,

        status: "PENDING",
      },
    });

    return NextResponse.json(shipment);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}