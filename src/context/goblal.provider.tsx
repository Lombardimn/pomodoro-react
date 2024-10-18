import { ReactNode, useState } from "react"
import { GlobalContext } from "@/context"

const EmptyGlobalState: string = ''

interface GlobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<string>(EmptyGlobalState)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}