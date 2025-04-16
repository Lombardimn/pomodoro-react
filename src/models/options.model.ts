// Interfaz para definir la estructura básica de cada opción en el dropdown
interface Option {
  label: string
  color: string
}

interface PositionProps {
  top: number
  left: number
}

// Interfaz base para propiedades compartidas entre componentes
interface BaseDropdownProps {
  options: Option[]
  onSelectOption: (option: Option) => void
}

// Extensión de la interfaz base para el componente DropdownOption
interface DropdownOptionProps extends Option {
  isSelected: boolean
  onSelect: () => void
}

// Extensión de la interfaz base para el botón desplegable
interface DropdownButtonProps {
  selectedOption: Option
  reference: React.RefObject<HTMLButtonElement>
  onToggleDropdown: () => void
}

// Extensión de la interfaz base para la lista de opciones desplegable
interface DropdownListProps extends BaseDropdownProps {
  isOpen: boolean
  position: PositionProps
}

export type {
  Option,
  PositionProps,
  BaseDropdownProps,
  DropdownOptionProps,
  DropdownButtonProps,
  DropdownListProps
}
