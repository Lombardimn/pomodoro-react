import { EmptyLocalStorage, LocalStorageProps } from "@/models"
import { ReactNode, useEffect } from "react"
import { useGlobalContext } from "@/context"
import { useLocalStorage } from "@/Hooks"

interface AppProps {
  children: ReactNode
}

function App( { children }: AppProps ) {
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
      {children}
    </>
  )
}

export default App
