import {
  Activity,
  Calendar,
  CircleDollarSign,
  Gem,
  Heart,
  MapPin,
  Shield,
  ShieldCheck,
  Smile,
  Sparkle,
  Sparkles,
  Stethoscope,
  ThumbsUp,
  Users,
  type LucideProps,
} from "lucide-react"

const MAP = {
  Activity,
  Calendar,
  CircleDollarSign,
  Gem,
  Heart,
  MapPin,
  Shield,
  ShieldCheck,
  Smile,
  Sparkle,
  Sparkles,
  Stethoscope,
  ThumbsUp,
  Users,
}

export type IconName = keyof typeof MAP

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = MAP[name]
  return <Cmp {...props} />
}
