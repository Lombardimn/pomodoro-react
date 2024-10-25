import { createContext, useContext } from "react"

const ModalContext = createContext<{
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
  state: false,
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