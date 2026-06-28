"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function MatchPage() {
  const { shipmentId } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/matches/${shipmentId}`)
      .then((res) => res.json())
      .then(setData);
  }, [shipmentId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        🔍 Matches
      </h1>

      <div className="mb-4 p-3 border rounded">
        <p>
          📦 {data.shipment.origin} → {data.shipment.destination}
        </p>
        <p>⚖️ {data.shipment.weight} kg</p>
      </div>

      <div className="grid gap-3">
        {data.matches.length === 0 && (
          <p>No transport available</p>
        )}

        {data.matches.map((m: any) => (
          <div key={m.id} className="border p-4 rounded">
            <p>
              🚚 {m.fromLocation} → {m.toLocation}
            </p>

            <p className="text-sm text-gray-500">
              Capacity: {m.capacity} kg
            </p>

            <p className="text-sm">
              Driver: {m.transporter?.name}
            </p>

            <form
              action="/api/bookings"
              method="POST"
            >
              <input type="hidden" name="shipmentId" value={data.shipment.id} />
              <input type="hidden" name="availabilityId" value={m.id} />

              <button className="mt-2 bg-black text-white px-3 py-1 rounded">
                Book
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}