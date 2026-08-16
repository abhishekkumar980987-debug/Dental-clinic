import { CheckCircle, ExternalLink, Star } from "lucide-react"
import { CLINIC, REVIEWS } from "@/lib/site-data"

export function Reviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">
            Verified Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="text-2xl font-bold text-slate-900">{CLINIC.rating}</span>
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-500 font-medium text-sm">
              ({CLINIC.reviewCount} Google Reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.initial}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Google Review
                  </span>
                </div>
                <p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                  &quot;{review.quote}&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-sm">
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CLINIC.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm transition-all shadow-sm hover:shadow"
          >
            <ExternalLink className="w-4 h-4 text-brand-600" />
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
