"use client"

import { ChevronRight } from "lucide-react"
import { Icon } from "@/components/icon"
import { TREATMENTS } from "@/lib/site-data"

export function Treatments() {
  function selectTreatment(name: string) {
    window.dispatchEvent(new CustomEvent("select-treatment", { detail: name }))
  }

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">
            Comprehensive Oral Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Treatments Offered
          </h2>
          <p className="text-slate-600 text-base sm:text-lg text-pretty">
            Gentle, restorative, and preventive dental solutions catered to your unique smile
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.title}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-300 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={treatment.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{treatment.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{treatment.desc}</p>
              </div>
              <div>
                <a
                  href="#appointment"
                  onClick={() => selectTreatment(treatment.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700"
                >
                  <span>Book Consultation</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
