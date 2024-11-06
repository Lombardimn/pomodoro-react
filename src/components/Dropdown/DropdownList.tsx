import { DropdownListProps } from "@/models"
import { DropdownOption } from "@/components"
import { createPortal } from "react-dom"
import { useRef } from "react"

const DropdownList = ({ options, onSelectOption, isOpen, position }: DropdownListProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownRoot = document?.getElementById('listbox') as HTMLDivElement
  if (!isOpen) return null

  return createPortal(
    <div 
      ref={dropdownRef}
      role="listbox"
      className="absolute z-30 mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg"
      style={{ position: 'absolute', top: position.top, left: position.left }}
    >
      {
        options.map((option, index) => (
          <DropdownOption
            key={index}
            label={option.label}
            color={option.color}
            isSelected={false}
            onSelect={() => onSelectOption(option)}
          ></DropdownOption>
        ))
      }
    </div>,
    dropdownRoot
  )
}

export { DropdownList }