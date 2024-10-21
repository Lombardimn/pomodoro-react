import { useGlobalContext } from "@/context"
import { Icon } from "@/components"

const ThemeToggle = () => {
  const { value, setValue } = useGlobalContext()

  const handleTheme = () => {
    const newTheme = value === "dark" ? "light" : "dark"
    localStorage.setItem("theme", newTheme)
    setValue(newTheme)
  }

  const classToggle: string = "z-10 relative flex items-center p-2 w-8 h-8 text-base text-text-light dark:text-text-dark before:content[''] before:-z-10 before:absolute before:inset-0 before:bg-text-accent-light/90 dark:before:bg-d-accent-regular before:rounded-full transition ease-in-out duration-400"

  return (
    <button id="scheme" onClick={handleTheme} aria-pressed='false' className="flex justify-between items-center border-2 rounded-full p-0 cursor-pointer dark:bg-background-light/15 bg-background-dark/15 hover:border-hover-light dark:hover:border-hover-dark">
    <span className="sr-only">Tema Oscuro</span>
    <span 
      className={value === 'dark' ? (classToggle + ' ' +'before:translate-x-full'): classToggle }
    >
      <Icon icon="sun" size="26"/>
    </span>
    <span 
      className="z-10 relative flex items-center p-2 w-8 h-8 text-base text-text-light/55 dark:text-text-light">
      <Icon icon="moon" size="26"/>
    </span>
  </button>
  )
}

export { ThemeToggle }