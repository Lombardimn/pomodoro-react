import { useState } from "react"
import { ModalContext } from "@/components"

const EmptyModalState: string | null = null

interface ModalProps {
  children: React.ReactNode
}

const ModalProvider = ({children}: ModalProps) => {
  const [state, setState] = useState<string | null>(EmptyModalState)

  return (
    <ModalContext.Provider value={{state, setState}}>{children}</ModalContext.Provider>
  )
}

export { ModalProvider }