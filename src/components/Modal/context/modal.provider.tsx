import { useState } from "react"
import { ModalContext } from "@/components"

const EmptyModalState: boolean = false

interface ModalProps {
  children: React.ReactNode
}

const ModalProvider = ({children}: ModalProps) => {
  const [state, setState] = useState<boolean>(EmptyModalState)

  return (
    <ModalContext.Provider value={{state, setState}}>{children}</ModalContext.Provider>
  )
}

export { ModalProvider }