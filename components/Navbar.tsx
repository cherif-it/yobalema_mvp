"use client";

import Link from "next/link";
import { Truck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow">
            <Truck size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Yobalema
            </h1>

            <p className="text-xs text-slate-500">
              Smart Freight Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#routes"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Routes
          </a>

          <a
            href="#contact"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            href="/login"
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">

          <nav className="flex flex-col p-6 gap-4">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>

            <a href="#routes" onClick={() => setOpen(false)}>
              Routes
            </a>

            <Link href="/login">
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-blue-600 p-3 text-center text-white"
            >
              Get Started
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}