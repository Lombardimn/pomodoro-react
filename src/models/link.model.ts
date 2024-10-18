import { iconPaths } from "@/utils"

type Class = string | undefined

interface BaseLink {
  label: string
  class?: Class
  icon: keyof typeof iconPaths
  children?: React.ReactNode
}

interface AnchorLink extends BaseLink {
  href: string
  active?: boolean
  type: 'anchor'
}

interface ButtonLink extends BaseLink {
  onClick?: () => void
  type: 'button'
}

type Link = AnchorLink | ButtonLink

export type { Link, AnchorLink, ButtonLink }