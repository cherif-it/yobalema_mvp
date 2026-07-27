"use client";

const companies = [
  "DHL",
  "MAERSK",
  "MSC",
  "Bolloré",
  "CMA CGM",
  "DP World",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted by logistics professionals
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl"
            >
              <span className="text-lg font-bold tracking-wide text-slate-700">
                {company}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}