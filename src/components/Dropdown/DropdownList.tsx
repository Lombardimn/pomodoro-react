import { DropdownListProps } from "@/models"
import { DropdownOption } from "@/components"
import { createPortal } from "react-dom"

const DropdownList = ({ options, onSelectOption, isOpen, position }: DropdownListProps) => {
  const BodyRef = document.body
  if (!isOpen) return null

  return createPortal(
    <div 
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
    BodyRef
  )
}

export { DropdownList }