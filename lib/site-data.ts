export const CLINIC = {
  name: "Pankaj Dental",
  fullName: "Pankaj Dental Clinic",
  phoneDisplay: "077439 35777",
  phoneHref: "tel:07743935777",
  hours: "10:00 AM – 8:00 PM",
  address:
    "Shop No. 14, R.D. Complex, Bazar Peth, Laxminagar, Khopoli, MH – 410203",
  addressShort: "R.D. Complex, Bazar Peth, Khopoli",
  mapsUrl: "https://maps.google.com/?q=Pankaj+Dental+Clinic+Khopoli",
  reviewsUrl: "https://www.google.com/search?q=Pankaj+Dental+Clinic+Khopoli",
  rating: "4.9",
  reviewCount: 64,
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export const TREATMENTS = [
  {
    icon: "Shield",
    title: "Root Canal Treatment",
    desc: "Relieve tooth discomfort and preserve your natural tooth structure through gentle, structured endodontic care.",
  },
  {
    icon: "Gem",
    title: "Dental Implants",
    desc: "Modern tooth restoration designed to replace missing teeth, restore chewing functionality, and build smile confidence.",
  },
  {
    icon: "Activity",
    title: "Wisdom Tooth Removal",
    desc: "Thoughtful diagnosis and removal of problematic wisdom teeth to alleviate crowding, pressure, or discomfort.",
  },
  {
    icon: "Smile",
    title: "General Dental Care",
    desc: "Comprehensive fillings, scaling, cleaning, and routine oral maintenance procedures for all age groups.",
  },
  {
    icon: "Sparkle",
    title: "Preventive Dental Care",
    desc: "Routine check-ups, early cavity detection, and preventive hygiene recommendations to protect your dental health long-term.",
  },
  {
    icon: "Stethoscope",
    title: "Dental Consultation",
    desc: "Have dental concerns or need a second opinion? Get an honest assessment and tailored treatment pathway.",
  },
] as const

export const TREATMENT_OPTIONS = [
  "General Consultation / First Check-up",
  "Root Canal Treatment",
  "Dental Implants",
  "Wisdom Tooth Removal",
  "Cleaning & Scaling",
  "Other Dental Issue",
]

export const TIME_SLOTS = [
  "Morning (10:00 AM - 1:00 PM)",
  "Afternoon (1:00 PM - 5:00 PM)",
  "Evening (5:00 PM - 8:00 PM)",
]

export const WHY_US = [
  {
    icon: "Smile",
    title: "Gentle & Calm Treatment",
    desc: "Patients consistently note how procedures are conducted with minimal discomfort and utmost care.",
  },
  {
    icon: "Users",
    title: "Patient-Friendly Doctors & Staff",
    desc: "Welcoming staff and doctors who take the time to answer questions and explain procedures calmly.",
  },
  {
    icon: "ShieldCheck",
    title: "Sterilized Clinical Environment",
    desc: "Strict sterilization standards and clean, well-maintained equipment for safety and hygiene.",
  },
  {
    icon: "CircleDollarSign",
    title: "Reasonable & Transparent Pricing",
    desc: "Honest treatment options without unnecessary costs or hidden fees.",
  },
  {
    icon: "Calendar",
    title: "Open 7 Days a Week",
    desc: "Convenient daily clinic timings from 10:00 AM to 8:00 PM for easy scheduling around work.",
  },
  {
    icon: "MapPin",
    title: "Central Khopoli Location",
    desc: "Easily accessible at R.D. Complex in Bazar Peth, Laxminagar, Khopoli.",
  },
] as const

export const REVIEWS = [
  {
    quote:
      "Patients appreciate the gentle and comfortable treatment experience provided at Pankaj Dental Clinic. The procedure was smooth and pain-free.",
    initial: "P",
    name: "Local Resident",
    location: "Khopoli, Maharashtra",
  },
  {
    quote:
      "Reviews consistently highlight the helpful staff and patient-friendly doctors who explain every step clearly before starting treatment.",
    initial: "R",
    name: "Patient Review",
    location: "Khopoli Patient",
  },
  {
    quote:
      "Patients have described complex procedures such as root canal treatment and dental implants as very smooth and manageable experiences.",
    initial: "A",
    name: "Verified Patient",
    location: "Google Reviewer",
  },
]

export const TRUST_PILLARS = [
  {
    icon: "Heart",
    title: "Gentle & Comfortable Care",
    desc: "Patient-focused treatment designed to make your dental experience as gentle, relaxed, and stress-free as possible.",
  },
  {
    icon: "Sparkles",
    title: "Modern Dental Setup",
    desc: "Professional dental equipment, ergonomic treatment chair, and a clean, ultra-welcoming clinical environment.",
  },
  {
    icon: "ThumbsUp",
    title: "Trusted by Patients",
    desc: "Highly recommended by Khopoli residents, holding an outstanding 4.9/5 rating based on 64 Google reviews.",
  },
] as const
