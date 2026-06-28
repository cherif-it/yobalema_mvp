"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ShipmentDetail() {
  const { id } = useParams();
  const [shipment, setShipment] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/shipments/${id}`)
      .then((r) => r.json())
      .then(setShipment);
  }, [id]);

  if (!shipment) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">
        📦 {shipment.origin} → {shipment.destination}
      </h1>

      <p>{shipment.description}</p>
      <p>⚖️ {shipment.weight} kg</p>
      <p>Status: {shipment.status}</p>

      <a
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
        href={`/dashboard/matches/${shipment.id}`}
      >
        View Matches
      </a>
    </div>
  );
}