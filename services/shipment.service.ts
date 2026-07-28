import * as repository from "@/repositories/shipment.repository";
import { NotFoundError } from "@/utils/errors";

export async function getAllShipments() {
  return repository.findAll();
}

export async function getShipment(id: string) {
  const shipment = await repository.findById(id);

  if (!shipment) {
    throw new NotFoundError("Shipment not found");
  }

  return shipment;
}

export async function createShipment(data: any) {
  return repository.create(data);
}

export async function updateShipment(id: string, data: any) {
  await getShipment(id);

  return repository.update(id, data);
}

export async function deleteShipment(id: string) {
  await getShipment(id);

  return repository.remove(id);
}