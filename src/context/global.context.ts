import { EmptyLocalStorage, LocalStorageProps } from "@/models"
import { createContext, useContext } from "react"

interface GlobalContextType {
  value: LocalStorageProps
  setValue: React.Dispatch<React.SetStateAction<LocalStorageProps>>
}

const GlobalContext = createContext<GlobalContextType>({
  value: EmptyLocalStorage,
  setValue: () => {}
})

const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.value && context.value !== '') {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context
}

export { GlobalContext, useGlobalContext }