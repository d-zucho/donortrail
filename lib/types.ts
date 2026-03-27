import { Icon } from '@tabler/icons-react'
import { LucideIcon } from 'lucide-react'

export type Nav_Link = {
  href: string
  label: string
}

export type THome_Data_Point = {
  stat: number
  description: string
}

export type TFeatureCard = {
  title: string
  description: string
  icon: string
  src: string
}

export type TWhyUs2_Card = {
  title: string
  description: string
  icon: LucideIcon
  icon2?: Icon | LucideIcon | null
}

export type TPipeline_Data = {
  number: string
  title: string
  description: string
  icon: LucideIcon | Icon
}

export type TProcess_Data = {
  icon: Icon | LucideIcon
  title: string
  description: string
}
