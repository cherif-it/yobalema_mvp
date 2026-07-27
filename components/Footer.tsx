"use client";

import Link from "next/link";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
    >
      {/* Background decoration */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Newsletter */}

        <div className="mb-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                NEWSLETTER
              </span>

              <h2 className="mt-5 text-4xl font-bold">
                Stay updated with logistics innovation.
              </h2>

              <p className="mt-4 max-w-xl text-slate-300">
                Receive new freight opportunities, platform updates,
                and logistics insights directly in your inbox.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none"
              />

              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500">
                Subscribe
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* Footer Columns */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">

                <Truck size={26} />

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  Yobalema
                </h2>

                <p className="text-sm text-slate-400">
                  Smart Freight Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Connecting shippers and transporters across Africa
              with intelligent freight matching and modern logistics.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Company
            </h3>

            <div className="space-y-4 text-slate-400">

              <Link href="/">Home</Link>

              <Link href="/dashboard">
                Dashboard
              </Link>

              <Link href="/register">
                Create account
              </Link>

              <Link href="/login">
                Login
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Resources
            </h3>

            <div className="space-y-4 text-slate-400">

              <a href="#features">
                Features
              </a>

              <a href="#routes">
                Routes
              </a>

              <a href="#">
                Documentation
              </a>

              <a href="#">
                API
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Mail size={18} />

                contact@yobalema.com

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Phone size={18} />

                +221 77 000 00 00

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <MapPin size={18} />

                Dakar, Senegal

              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600">

                <Globe size={20} />

              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600">

                <Mail size={20} />

              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600">

                <Phone size={20} />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Yobalema Technologies.
            All rights reserved.
          </p>

          <div className="flex gap-8">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Cookies
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}