import { MouseEvent, ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Icon, IconLink, useModalContext } from "@/components"

interface ModalComponentProps {
  title: string
  id: string
  className?: string
  children: ReactNode
}

const eventListener = 'keydown'

const Modal = ({children , className, title, id}: ModalComponentProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { state, setState } = useModalContext()
  const modalRoot = document.getElementById('modal') as HTMLDivElement
  
  const closeModal = () => setState(null)
  
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setState(null)
      }
    }

    if (state === id) {
      document.addEventListener(eventListener, handleEsc)
    }

    return () => document.removeEventListener(eventListener, handleEsc)
  }, [setState, state, id])

  if (state !== id || !modalRoot) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity z-50 overflow-y-auto" onClick={closeModal}>
      <div className={className} ref={modalRef} onClick={handleContentClick}>
        <IconLink
          type="button"
          label="Cerrar"
          icon="empty"
          parentMethod={closeModal}
          class="absolute top-2 right-2 ml-2 rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light"
        >
          <Icon icon="close" color="currentColor" size="24" />
        </IconLink>
        <h2 className="text-2xl font-semibold mb-4 text-center mt-6">{title}</h2>
        <div>
            {children}
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export { Modal }