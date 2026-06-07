"use client";

import { useEffect, useState } from "react";

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("/api/shipment")
      .then((res) => res.json())
      .then(setShipments);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        📦 My Shipments
      </h1>

      <div className="grid gap-4">
        {shipments.map((s: any) => (
          <div
            key={s.id}
            className="bg-white p-4 border rounded"
          >
            <h2 className="font-bold">{s.title}</h2>
            <p>{s.origin} → {s.destination}</p>
            <p className="text-sm text-gray-500">
              {s.weight} kg
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}