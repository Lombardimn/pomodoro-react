interface TagProps {
  id: string
  name: string
  color: string
  label: string
  enable: boolean
  background?: string
  pin?: string
}

interface intTagProps {
  id: string
  name: string
}

export type { TagProps, intTagProps }