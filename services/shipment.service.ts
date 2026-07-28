import * as repository from "@/repositories/shipment.repository";

export async function getAllShipments() {
  return repository.findAllShipments();
}

export async function getShipment(id: string) {
  return repository.findShipmentById(id);
}

export async function createShipment(data: any) {
  return repository.createShipment(data);
}

export async function deleteShipment(id: string) {
  return repository.deleteShipment(id);
}