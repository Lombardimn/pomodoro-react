import { LocalStorageProps } from "@/models"
import { Dispatch, SetStateAction } from "react"

interface GlobalContextType {
  value: LocalStorageProps
  setValue: Dispatch<SetStateAction<string>>
}

export type { GlobalContextType }