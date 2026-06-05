import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const shipment = await prisma.shipment.create({
    data: {
      title: body.title,
      description: body.description,
      origin: body.origin,
      destination: body.destination,
      date: new Date(body.date),
      weight: body.weight,
      expeditorId: body.expeditorId,
    },
  });

  return Response.json(shipment);
}

export async function GET() {
  const shipments = await prisma.shipment.findMany();
  return Response.json(shipments);
}