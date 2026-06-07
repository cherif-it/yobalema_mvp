async function getBookings() {
    const res = await fetch("http://localhost:3000/api/booking", {
      cache: "no-store",
    });
  
    return res.json();
  }
  
  export default async function BookingsPage() {
    const bookings = await getBookings();
  
    return (
      <div style={{ padding: 40 }}>
        <h2>🤝 Bookings</h2>
  
        {bookings.map((b: any) => (
          <div key={b.id} style={{ margin: 10, border: "1px solid #ccc", padding: 10 }}>
            <p>📦 Shipment: {b.shipmentId}</p>
            <p>🚗 Transporteur: {b.transporterId}</p>
            <p>📊 Status: {b.status}</p>
          </div>
        ))}
      </div>
    );
  }