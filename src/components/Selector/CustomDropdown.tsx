import React, { useState, useRef, useEffect } from 'react'

export interface Option {
  id: string
  label: string
  color: string
}

interface CustomDropdownProps {
  options: Option[]
  onSelect: (selected: Option) => void
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen(!isOpen)

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative bg-white">
      {/* Button */}
      <button
        onClick={handleToggle}
        className="w-full z-0 flex justify-between py-2 px-3 items-center border dark:border-gray-700 hover:border-gray-400 text-left text-gray-500 dark:text-gray-400 hover:text-gray-600 rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="text-sm flex items-center gap-2 relative">
          {selectedOption ? (
            <>
              <div className={"h-1.5 w-1.5 rounded-full " + (selectedOption.color)} />
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span>Options</span>
          )}
        </div>
      </button>

      {/* Options List */}
      {isOpen && (
        <div
        className="absolute bg-white dark:bg-gray-800 rounded-md shadow-lg mt-1 w-full"
        role="listbox"
        data-dialog
        >
          {
            options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                role="option"
                className="relative z-50 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer select-none py-2 pl-2 text-left flex items-center gap-2"
              >
                <span className={"h-1.5 w-1.5 rounded-full " + (option.color)} aria-hidden="true"></span>
                <span className="text-sm">{option.label}</span>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}

export { CustomDropdown }