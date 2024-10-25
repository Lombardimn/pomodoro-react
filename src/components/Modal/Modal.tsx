import { useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "@/components"

const Modal = ({children}: {children: React.ReactNode}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { state, setState } = useModalContext()
  const closeModal = () => setState(false)
  const modalRoot = document.getElementById('modal')

  if (!state || !modalRoot) return null


  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" ref={modalRef} role="presentation">
        {children}
        <button className="close" onClick={closeModal} aria-label="Cerrar">X</button>
      </div>
    </div>,
    modalRoot
  )
}

export { Modal }