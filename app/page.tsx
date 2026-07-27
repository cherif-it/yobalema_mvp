import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularRoutes from "@/components/PopularRoutes";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <TrustedBy />

      <HowItWorks />

      <Features />

      <PopularRoutes />

      {/* Call To Action */}

      <section className="bg-blue-600 py-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            READY TO START?
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Connect Your Freight
            <br />
            With Trusted Transporters
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Join Yobalema today and simplify freight transportation across
            Africa using intelligent shipment matching.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/register"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Create Free Account
            </a>

            <a
              href="/login"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              Login
            </a>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}