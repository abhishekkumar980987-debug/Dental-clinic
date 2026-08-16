"use client"

import { useState } from "react"
import { Clock, MapPin, Menu, Phone, Smile, X } from "lucide-react"
import { CLINIC, NAV_LINKS } from "@/lib/site-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Announcement top bar */}
      <div className="bg-brand-900 text-teal-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-200" /> Open Daily: {CLINIC.hours}
            </span>
            <span className="hidden md:inline text-brand-700">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-200" /> {CLINIC.addressShort}
            </span>
          </div>
          <a
            href={CLINIC.phoneHref}
            className="hover:text-white font-semibold transition-colors flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5 text-brand-200" /> {CLINIC.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                {CLINIC.name}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 block">
                Clinic • Khopoli
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#appointment"
              className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-brand-600/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-md"
            >
              Book Appointment
            </a>
          </div>
        )}
      </header>
    </>
  )
}
