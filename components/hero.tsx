import Image from "next/image"
import { Calendar, CheckCircle2, HeartPulse, PhoneCall, ShieldCheck, Star } from "lucide-react"
import { CLINIC } from "@/lib/site-data"

export function Hero() {
  return (
    <section id="home" className="relative hero-gradient overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-100 shadow-sm text-xs sm:text-sm text-slate-700 self-center lg:self-start">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">{CLINIC.rating} / 5</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">{CLINIC.reviewCount} Google Reviews</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Confident Smiles{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-accent-blue">
                Start Here.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Modern dental care with a gentle, patient-first approach. Experience comprehensive dental
              treatments in Khopoli&apos;s clean, relaxed environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#appointment"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </a>
              <a
                href={CLINIC.phoneHref}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-base transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-brand-600" />
                Call Now: {CLINIC.phoneDisplay}
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-600">
              {["Open Daily 10 AM – 8 PM", "Gentle Care Focus", "Sterilized Equipment"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern dental clinic treatment room at Pankaj Dental Clinic"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 sm:left-4 glass-panel p-4 rounded-2xl shadow-xl max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Hygiene Standards</p>
                    <p className="text-sm font-bold text-slate-900">Strictly Sterilized</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl shadow-xl max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Patient Comfort</p>
                    <p className="text-sm font-bold text-slate-900">Gentle Dentistry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
