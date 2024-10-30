import { createContext, useContext } from "react"

const ModalContext = createContext<{
  state: string | null
  setState: React.Dispatch<React.SetStateAction<string | null>>
}>({
  state: null,
  setState: () => null
})

const useModalContext = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('Modal is being used outside it\'s provider')
  }

  return context
}

export { useModalContext, ModalContext }