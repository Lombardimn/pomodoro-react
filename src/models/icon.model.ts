import { iconPaths } from "@/utils";

interface IconProps {
  icon: keyof typeof iconPaths
  color?: string
  size?: string
  gradient?: boolean
  class?: string
  viewBox?: string
}


export type { IconProps }