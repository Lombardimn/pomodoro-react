import { createContext, Dispatch, SetStateAction, useContext } from "react"

const ModalContext = createContext<{
  state: string | null
  setState: Dispatch<SetStateAction<string | null>>
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