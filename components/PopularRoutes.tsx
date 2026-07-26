import {
    ArrowRight,
    MapPin,
    Truck,
    Clock3,
  } from "lucide-react";
  
  const routes = [
    {
      from: "Dakar",
      to: "Bamako",
      distance: "1,230 km",
      duration: "2 Days",
    },
    {
      from: "Abidjan",
      to: "Lomé",
      distance: "850 km",
      duration: "1 Day",
    },
    {
      from: "Accra",
      to: "Lagos",
      distance: "465 km",
      duration: "8 Hours",
    },
    {
      from: "Douala",
      to: "Yaoundé",
      distance: "250 km",
      duration: "4 Hours",
    },
  ];
  
  export default function PopularRoutes() {
    return (
      <section
        id="routes"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
  
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              POPULAR ROUTES
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Frequently Requested Freight Routes
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Explore some of the most active transport corridors across Africa.
            </p>
  
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {routes.map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
  
                  <div className="rounded-2xl bg-blue-600 p-3 text-white">
                    <Truck size={24} />
                  </div>
  
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Active
                  </span>
  
                </div>
  
                <div className="space-y-3">
  
                  <div className="flex items-center gap-2">
  
                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />
  
                    <span className="font-semibold text-slate-900">
                      {route.from}
                    </span>
  
                  </div>
  
                  <div className="flex justify-center">
                    <ArrowRight className="text-slate-400" />
                  </div>
  
                  <div className="flex items-center gap-2">
  
                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />
  
                    <span className="font-semibold text-slate-900">
                      {route.to}
                    </span>
  
                  </div>
  
                </div>
  
                <div className="mt-8 border-t pt-6">
  
                  <div className="mb-3 flex items-center justify-between">
  
                    <span className="text-slate-500">
                      Distance
                    </span>
  
                    <span className="font-semibold">
                      {route.distance}
                    </span>
  
                  </div>
  
                  <div className="flex items-center justify-between">
  
                    <span className="flex items-center gap-2 text-slate-500">
                      <Clock3 size={16} />
                      Duration
                    </span>
  
                    <span className="font-semibold">
                      {route.duration}
                    </span>
  
                  </div>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }