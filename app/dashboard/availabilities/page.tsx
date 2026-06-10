"use client";

import { useEffect, useState } from "react";

export default function AvailabilitiesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/availabilities")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">🚚 Availabilities</h1>

      {data.map((a: any) => (
        <div key={a.id} className="border p-3 mb-2 rounded">
          <p>{a.fromLocation} → {a.toLocation}</p>
          <p>Capacity: {a.capacity}</p>
          <p>Driver: {a.transporter?.name}</p>
        </div>
      ))}
    </div>
  );
}