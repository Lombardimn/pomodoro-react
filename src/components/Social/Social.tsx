import { AnchorLink as IconLink } from "@/models"

const Social = ({label, href, icon}: IconLink) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  )
}

export { Social }