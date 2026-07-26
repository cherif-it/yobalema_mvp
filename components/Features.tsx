import {
    Truck,
    Route,
    ShieldCheck,
    Clock,
    MapPinned,
    PackageCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: Truck,
      title: "Verified Transporters",
      description:
        "Work with trusted transport companies and independent carriers verified by Yobalema.",
    },
    {
      icon: Route,
      title: "Smart Matching",
      description:
        "Our matching engine instantly connects shipments with available transporters.",
    },
    {
      icon: Clock,
      title: "Real-Time Availability",
      description:
        "Transporters publish available routes and capacities in real time.",
    },
    {
      icon: MapPinned,
      title: "Pan-African Coverage",
      description:
        "Manage shipments across cities and countries throughout Africa.",
    },
    {
      icon: PackageCheck,
      title: "Instant Booking",
      description:
        "Reserve transport capacity in just a few clicks with transparent status tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Authentication, booking validation and shipment management are handled securely.",
    },
  ];
  
  export default function Features() {
    return (
      <section
        id="features"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
  
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              WHY YOBALEMA
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Everything you need to move freight
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Yobalema simplifies logistics by connecting shippers and
              transporters through a modern digital marketplace.
            </p>
  
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Icon size={28} />
                  </div>
  
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
  
                  <p className="leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
  
          </div>
        </div>
      </section>
    );
  }