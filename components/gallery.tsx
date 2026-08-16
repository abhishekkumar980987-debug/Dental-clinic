"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

type Category = "all" | "clinic" | "treatment" | "equipment" | "reception"

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "clinic", label: "Clinic Exterior" },
  { id: "treatment", label: "Treatment Room" },
  { id: "equipment", label: "Equipment" },
  { id: "reception", label: "Reception" },
]

const IMAGES: { category: Exclude<Category, "all">; thumb: string; full: string; caption: string }[] = [
  {
    category: "clinic",
    thumb: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    caption: "Modern Treatment Room",
  },
  {
    category: "treatment",
    thumb: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    caption: "Dental Treatment Chair",
  },
  {
    category: "equipment",
    thumb: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    caption: "Sterilized Clinical Equipment",
  },
  {
    category: "reception",
    thumb: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    caption: "Reception & Waiting Area",
  },
  {
    category: "treatment",
    thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    caption: "Patient Consultation Area",
  },
  {
    category: "clinic",
    thumb: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    full: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    caption: "Clean Clinical Setting",
  },
]

export function Gallery() {
  const [filter, setFilter] = useState<Category>("all")
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  const visible = IMAGES.filter((img) => filter === "all" || img.category === filter)

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">
            Inside Our Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic &amp; Facilities
          </h2>
          <p className="text-slate-600 text-base">
            Take a virtual look around Pankaj Dental Clinic in Khopoli.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab.id
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((img) => (
            <button
              key={img.full}
              onClick={() => setLightbox({ src: img.full, caption: img.caption })}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm cursor-pointer aspect-[4/3]"
            >
              <Image
                src={img.thumb}
                alt={img.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn className="w-8 h-8" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white hover:text-slate-300 p-2"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] p-2" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src || "/placeholder.svg"}
              alt={lightbox.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
            <p className="text-center text-white text-sm mt-3 font-medium">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
