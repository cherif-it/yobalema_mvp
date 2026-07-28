import { prisma } from "@/lib/prisma";

export async function findAllShipments() {
  return prisma.shipment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findShipmentById(id: string) {
  return prisma.shipment.findUnique({
    where: { id },
  });
}

export async function createShipment(data: any) {
  return prisma.shipment.create({
    data,
  });
}

export async function deleteShipment(id: string) {
  return prisma.shipment.delete({
    where: { id },
  });
}