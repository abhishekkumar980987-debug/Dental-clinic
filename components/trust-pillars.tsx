import { Icon } from "@/components/icon"
import { TRUST_PILLARS } from "@/lib/site-data"

export function TrustPillars() {
  return (
    <section className="py-12 bg-white relative z-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card p-8 rounded-2xl hover:border-brand-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Icon name={pillar.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
