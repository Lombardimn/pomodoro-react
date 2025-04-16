import { ReactNode, useState } from "react"
import { GlobalContext } from "@/context"
import { EmptyLocalStorage, LocalStorageProps } from "@/models"

interface GlobalProps {
  children: ReactNode
}

const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<LocalStorageProps>(EmptyLocalStorage)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}

export { GlobalProvider }