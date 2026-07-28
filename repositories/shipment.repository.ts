import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function findAll() {
  return prisma.shipment.findMany({
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
}

export async function findById(id: string) {
  return prisma.shipment.findUnique({
    where: { id },
    include: {
      expeditor: true,
      Booking: true,
    },
  });
}

export async function create(data: Prisma.ShipmentCreateInput) {
  return prisma.shipment.create({
    data,
  });
}

export async function update(
  id: string,
  data: Prisma.ShipmentUpdateInput
) {
  return prisma.shipment.update({
    where: { id },
    data,
  });
}

export async function remove(id: string) {
  return prisma.shipment.delete({
    where: { id },
  });
}