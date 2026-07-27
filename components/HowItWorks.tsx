import {
    PackagePlus,
    BrainCircuit,
    Truck,
    ArrowRight,
  } from "lucide-react";
  
  const steps = [
    {
      icon: PackagePlus,
      number: "01",
      title: "Create your shipment",
      description:
        "Describe your freight, choose the origin, destination, weight and preferred delivery date.",
    },
    {
      icon: BrainCircuit,
      number: "02",
      title: "AI matches transporters",
      description:
        "Yobalema automatically finds the best verified transporters based on routes, capacity and availability.",
    },
    {
      icon: Truck,
      number: "03",
      title: "Book & Deliver",
      description:
        "Confirm your booking, track the shipment and complete delivery with confidence.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
  
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              HOW IT WORKS
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Logistics made simple
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              From shipment creation to delivery confirmation,
              Yobalema streamlines every step of the logistics process.
            </p>
  
          </div>
  
          <div className="relative mt-24">
  
            {/* Progress Line */}
  
            <div className="absolute left-0 right-0 top-16 hidden h-1 bg-slate-200 lg:block">
              <div className="h-full w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500" />
            </div>
  
            <div className="grid gap-10 lg:grid-cols-3">
  
              {steps.map((step, index) => {
                const Icon = step.icon;
  
                return (
                  <div
                    key={step.number}
                    className="relative rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
  
                    {/* Number */}
  
                    <div className="absolute right-8 top-8 text-6xl font-black text-slate-100">
                      {step.number}
                    </div>
  
                    {/* Icon */}
  
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                      <Icon size={30} />
                    </div>
  
                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
  
                    <p className="mt-5 leading-8 text-slate-600">
                      {step.description}
                    </p>
  
                    {index !== steps.length - 1 && (
                      <div className="mt-10 hidden justify-center lg:flex">
                        <ArrowRight
                          size={34}
                          className="text-blue-500"
                        />
                      </div>
                    )}
  
                  </div>
                );
              })}
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }