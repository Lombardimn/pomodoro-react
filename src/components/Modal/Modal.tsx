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
  const modalRoot = document.getElementById('modal')
  
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
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transform transition-all duration-300 z-50" onClick={closeModal}>
      <div className={className} ref={modalRef} onClick={handleContentClick}>
        <div className="flex justify-between gap-5 items-start">
          <div className="flex flex-col space-y-2 items-start">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {children}
          </div>
          <IconLink
            type="button"
            label="Cerrar"
            icon="empty"
            parentMethod={closeModal}
            class="rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light"
          >
            <Icon icon="close" color="currentColor" size="24" />
          </IconLink>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export { Modal }