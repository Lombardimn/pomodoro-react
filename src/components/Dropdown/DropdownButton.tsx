import { DropdownButtonProps } from "@/models"

const DropdownButton = ({ selectedOption, onToggleDropdown, reference }: DropdownButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggleDropdown}
      ref={reference}
      className="w-full flex justify-between py-2 px-3 items-center border dark:border-gray-700 hover:border-gray-400 text-left text-gray-500 dark:text-gray-400 hover:text-gray-600 rounded-md shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-purple-300 focus-visible:ring-offset-2 focus-visible:border-purple-500"
    >
      <div className="text-sm flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: selectedOption.color }} aria-hidden="true"></span>
        <p>{selectedOption.label}</p>
      </div>
    </button>
  )
}

export { DropdownButton }