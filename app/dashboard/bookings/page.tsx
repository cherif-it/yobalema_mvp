"use client";

import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">🤝 Bookings</h1>

      {bookings.map((b: any) => (
        <div key={b.id} className="border p-3 mb-2 rounded">
          <p>Status: {b.status}</p>
          <p>Shipment: {b.shipmentId}</p>
          <p>Availability: {b.availabilityId}</p>
        </div>
      ))}
    </div>
  );
}