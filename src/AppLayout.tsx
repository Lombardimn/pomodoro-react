import { EmptyLocalStorage, LocalStorageProps } from "@/models"
import { useGlobalContext } from "@/context"
import { ReactNode, useEffect } from "react"
import { useLocalStorage } from "@/Hooks"
import { Navbar } from "@/components"

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { value } = useGlobalContext()
  const { storedData } = useLocalStorage()

  useEffect(() => {
    const result: LocalStorageProps = storedData() ?? EmptyLocalStorage

    if (result.theme) {
      document.documentElement.classList.replace( 
        result.theme === 'dark'
          ? 'light' 
          : 'dark', 
      result.theme)
    }

  }, [value, storedData])

  return (
    <>
      <Navbar />
      {children}
      <p>Footer</p>
    </>
  )
}

export { AppLayout }