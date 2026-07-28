import { success, failure } from "@/utils/response";
import * as shipmentService from "@/services/shipment.service";

export async function GET() {
  try {
    const shipments = await shipmentService.getAllShipments();

    return success(shipments);
  } catch (error) {
    console.error(error);

    return failure("Unable to load shipments", 500);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const shipment = await shipmentService.createShipment(body);

    return success(shipment, 201);
  } catch (error) {
    console.error(error);

    return failure("Unable to create shipment", 500);
  }
}