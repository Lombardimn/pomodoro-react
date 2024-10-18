import { Link } from "@/models"
import { useLocation } from "react-router-dom"

const IconLink = (props: Link) => {
  const { label, class: className, children } = props
  const location = useLocation()

  if (props.type === 'anchor') {
    const { href, active } = props
    const isActive = active !== undefined 
      ? active 
      : location.pathname === href || (href !== '/' && location.pathname.startsWith(href))

    return (
      <a 
        href={href}
        aria-label={label}
        aria-current={isActive ? 'page' : false}
        className={ className + (isActive ? 'border-l-4 !border-hover-dark' : 'border-transparent')}>
        {label}
      </a>
    )
  }

  if (props.type === 'button') {
    const { onClick } = props;

    return (
      <button aria-label={label} onClick={onClick} className={className}>
        {children}
      </button>
    )
  }

  return (
    <div>Ups... Error somewhere</div>
  )
}

export { IconLink }
