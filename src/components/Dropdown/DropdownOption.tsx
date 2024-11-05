import { DropdownOptionProps } from "@/models"

const DropdownOption = ({label, color, isSelected, onSelect }: DropdownOptionProps) => {
  return (
    <div
      role="options"
      aria-selected={isSelected}
      onClick={onSelect}
      className={`hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer py-2 pl-2 text-left select-none ${ isSelected ? 'bg-gray-50 dark:bg-gray-700' : '' }`}  
    >
      <div className="text-sm flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true"></span>
        <p className="text-gray-500">{label}</p>
      </div>
    </div>
  )
}

export { DropdownOption }