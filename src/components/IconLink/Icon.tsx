import { IconProps } from "@/models"
import { iconPaths } from "@/utils"

const Icon = ({ icon, color = 'currentColor', size, gradient, class: className }: IconProps) => {
  const iconPath = iconPaths[icon]
  const gradientId = 'icon-gradient' + Math.round(Math.random() * 10e12).toString(36)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || '40'}
      height={size || '40'}
      viewBox='0 0 256 256'
      aria-hidden='true'
      fill={gradient ? `url(#${gradientId})` : color}
      stroke={gradient ? `url(#${gradientId})` : color}
      className={className}
      focusable='false'
    >
      {iconPath}
    </svg>

  )
}

export { Icon }