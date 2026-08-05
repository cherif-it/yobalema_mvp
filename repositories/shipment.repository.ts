import { prisma } from "@/lib/prisma";

export async function findAll() {
  return prisma.shipment.findMany();
}

export async function findById(id: string) {
  return prisma.shipment.findUnique({
    where: { id },
  });
}

export async function create(data: any) {
  return prisma.shipment.create({ data });
}

export async function update(id: string, data: any) {
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