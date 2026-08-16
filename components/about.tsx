import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CLINIC } from "@/lib/site-data"

const ABOUT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    alt: "Dental operatory chair",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    alt: "Sterilized dental equipment",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    alt: "Clean clinic consultation room",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    alt: "Patient care at Pankaj Dental",
    aspect: "aspect-[4/3]",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {[ABOUT_IMAGES[0], ABOUT_IMAGES[1]].map((img) => (
                  <div
                    key={img.src}
                    className={`relative rounded-2xl overflow-hidden shadow-md bg-slate-200 ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-8">
                {[ABOUT_IMAGES[2], ABOUT_IMAGES[3]].map((img) => (
                  <div
                    key={img.src}
                    className={`relative rounded-2xl overflow-hidden shadow-md bg-slate-200 ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">
                About {CLINIC.fullName}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight text-balance">
                A Comfortable Place for Better Dental Care
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At {CLINIC.fullName}, we believe every visit to the dentist should feel safe, comfortable,
              and reassuring. Located conveniently at Bazar Peth in Khopoli, our clinic provides modern
              dental treatment tailored to your individual needs.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Whether you require routine check-ups, root canal therapy, or advanced tooth replacement
              solutions, we place emphasis on maintaining a hygienic clinical setting, clear communication,
              and gentle procedures.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: CLINIC.rating, label: "Google Rating" },
                { value: `${CLINIC.reviewCount}+`, label: "Patient Reviews" },
                { value: "10-8", label: "Open Daily (PM)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-brand-600">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition-colors"
              >
                <span>Schedule your consultation today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
