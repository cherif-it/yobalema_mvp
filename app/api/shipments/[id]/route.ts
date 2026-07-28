import { success, failure } from "@/utils/response";
import * as shipmentService from "@/services/shipment.service";
import { AppError } from "@/utils/errors";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const shipment = await shipmentService.getShipment(id);

    return success(shipment);
  } catch (error) {
    console.error(error);

    if (error instanceof AppError) {
      return failure(error.message, error.status);
    }

    return failure("Internal server error", 500);
  }
}