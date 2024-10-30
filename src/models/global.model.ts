import { LocalStorageProps } from "@/models"

interface GlobalContextType {
  value: LocalStorageProps
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export type { GlobalContextType }