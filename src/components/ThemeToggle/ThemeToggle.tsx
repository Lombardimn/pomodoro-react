import { iconPaths } from "@/utils"
import { Icon } from "@/components"
import { useGlobalContext } from "@/context"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  id?: string
  description?: string
  parentMethod?: () => void
  iconOn: keyof typeof iconPaths
  iconOff: keyof typeof iconPaths
  watch: 'theme' | 'cycle';
}

const ThemeToggle = ( { id, description, parentMethod, iconOn, iconOff, watch }: ThemeToggleProps) => {
  const [flagClass, setFlagClass] = useState<boolean>(false);
  const { value } = useGlobalContext()


  useEffect(() => {
    if (value) {
      const isFlagged =
        (watch === 'theme' && value.theme === 'dark') ||
        (watch === 'cycle' && value.cycleEnabled === true)
      setFlagClass(isFlagged)
    }
  }, [value, watch])

  const classToggle: string = "z-10 relative flex items-center p-2 w-8 h-8 text-base text-text-light dark:text-text-dark before:content[''] before:-z-10 before:absolute before:inset-0 before:bg-text-accent-light/90 dark:before:bg-d-accent-regular before:rounded-full transition ease-in-out duration-400"

  return (
    <button id={id} onClick={parentMethod} aria-pressed='false' className="flex justify-between items-center border-2 rounded-full p-0 cursor-pointer dark:bg-background-light/15 bg-background-dark/15 hover:border-hover-light dark:hover:border-hover-dark">
    <span className="sr-only">{description}</span>
    <span 
      className={flagClass === true ? (classToggle + ' ' +'before:translate-x-full'): classToggle }
    >
      <Icon icon={iconOn} size="26"/>
    </span>
    <span 
      className="z-10 relative flex items-center p-2 w-8 h-8 text-base text-text-light/55 dark:text-text-light">
      <Icon icon={iconOff} size="26"/>
    </span>
  </button>
  )
}

export { ThemeToggle }