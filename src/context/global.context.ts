import { createContext, useContext } from "react"

interface GlobalContextType {
  value: string | null
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {}
})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.value && context.value !== '') {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context
}