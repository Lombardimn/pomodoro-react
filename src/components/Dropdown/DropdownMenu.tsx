import { Option, PositionProps } from "@/models"
import { useRef, useState } from "react"
import { DropdownButton } from "./DropdownButton"
import { DropdownList } from "./DropdownList"

interface DropdownMenuProps {
  options: Option[]
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuPosition, setMenuPosition] = useState<PositionProps>({ top: 0, left: 0 })
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: 'Status',
    color: 'rgb(211, 211, 211)',
  })

  const handleToggleDropdown = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: buttonRect.bottom + window.scrollY, // Añadimos scrollY para posición correcta al hacer scroll
        left: buttonRect.left + window.scrollX,
      })
    }
    setIsOpen((prev) => !prev)
  }

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <DropdownButton selectedOption={selectedOption} onToggleDropdown={handleToggleDropdown} reference={buttonRef} />
      <DropdownList options={options} onSelectOption={handleSelectOption} isOpen={isOpen} position={menuPosition} />
    </div>
  )
}

export { DropdownMenu }