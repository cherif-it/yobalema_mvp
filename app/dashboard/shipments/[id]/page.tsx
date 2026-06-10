"use client";

import { useEffect, useState } from "react";

export default function ShipmentDetail({ params }: any) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/shipments/${params.id}/matches`)
      .then((res) => res.json())
      .then(setData);
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">📦 Shipment</h1>

      <p>
        {data.shipment.origin} → {data.shipment.destination}
      </p>

      <h2 className="mt-4 font-bold">🚚 Matches</h2>

      <div className="space-y-2 mt-2">
        {data.matches.map((m: any) => (
          <div key={m.id} className="border p-3 rounded">
            <p>
              {m.fromLocation} → {m.toLocation}
            </p>
            <p>Capacity: {m.capacity}</p>
            <p>Driver: {m.transporter?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}