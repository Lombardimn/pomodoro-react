import { iconPaths } from "@/utils"
import { ReactNode } from "react"

type Class = string | undefined

interface BaseLink {
  label: string
  class?: Class
  icon: keyof typeof iconPaths
  children?: ReactNode
}

interface AnchorLink extends BaseLink {
  href: string
  active?: boolean
  type: 'anchor'
}

interface ButtonLink extends BaseLink {
  parentMethod?: () => void
  type: 'button'
}

type Link = AnchorLink | ButtonLink

export type { Link, AnchorLink, ButtonLink }