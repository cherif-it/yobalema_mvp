"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("/api/shipments")
      .then((res) => res.json())
      .then(setShipments);
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">📦 Shipments</h1>
        <Link href="/dashboard/shipments/new" className="bg-black text-white px-3 py-1 rounded">
          New
        </Link>
      </div>

      <div className="space-y-3">
        {shipments.map((s: any) => (
          <Link
            key={s.id}
            href={`/dashboard/shipments/${s.id}`}
            className="block border p-3 rounded hover:bg-gray-50"
          >
            <p className="font-bold">{s.title}</p>
            <p className="text-sm text-gray-500">
              {s.origin} → {s.destination}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}