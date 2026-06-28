"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadShipments() {
    const res = await fetch("/api/shipments");
    const data = await res.json();
    setShipments(data);
    setLoading(false);
  }

  useEffect(() => {
    loadShipments();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this shipment ?")) return;

    await fetch(`/api/shipments/${id}`, {
      method: "DELETE",
    });

    setShipments((prev) => prev.filter((s) => s.id !== id));
  }

  if (loading) {
    return <p className="p-6">Loading shipments...</p>;
  }

  return (
    <div className="p-6 space-y-4">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📦 Shipments</h1>

        <Link
          href="/dashboard/shipments/new"
          className="bg-black text-white px-4 py-2 rounded"
        >
          + New Shipment
        </Link>
      </div>

      {/* LIST */}
      <div className="grid gap-4">
        {shipments.length === 0 && (
          <p className="text-gray-500">No shipments yet</p>
        )}

        {shipments.map((s) => (
          <div
            key={s.id}
            className="border rounded p-4 space-y-2 bg-white"
          >
            {/* TITLE */}
            <div className="flex justify-between">
              <h2 className="font-bold">
                📦 {s.origin} → {s.destination}
              </h2>

              <span className="text-sm text-gray-500">
                {s.status}
              </span>
            </div>

            {/* DETAILS */}
            <p className="text-sm text-gray-600">
              {s.description}
            </p>

            <p className="text-sm">
              ⚖️ {s.weight} kg
            </p>

            {/* ACTIONS */}
            <div className="flex gap-2 pt-2">
              <Link
                href={`/dashboard/shipments/${s.id}`}
                className="px-3 py-1 border rounded"
              >
                View
              </Link>

              <Link
                href={`/dashboard/matches/${s.id}`}
                className="px-3 py-1 border rounded"
              >
                Matches
              </Link>

              <button
                onClick={() => handleDelete(s.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}