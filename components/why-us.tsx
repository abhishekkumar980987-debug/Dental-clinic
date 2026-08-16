import { Icon } from "@/components/icon"
import { WHY_US } from "@/lib/site-data"

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-400 font-bold text-sm uppercase tracking-wider">
            Patient-First Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Why Patients Choose Pankaj Dental Clinic
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Based on feedback and actual patient experiences shared in Khopoli.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="bg-slate-800/80 backdrop-blur border border-slate-700/60 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center mb-6">
                <Icon name={item.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
