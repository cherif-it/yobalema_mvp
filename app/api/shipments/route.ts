import { success, failure } from "@/utils/response";
import * as shipmentService from "@/services/shipment.service";

export async function GET() {
  try {
    const shipments =
      await shipmentService.getAllShipments();

    return success(shipments);
  } catch {
    return failure("Unable to load shipments", 500);
  }
}