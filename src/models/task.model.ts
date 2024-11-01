import { intTagProps } from "@/models"
import { DBSchema } from "idb"

interface TaskProps {
  id: string
  note: string
  order: number
  plannedCount: number
  status: string
  tags: intTagProps[]
  today: number
  todayOrder: number
  createdAt: string
  completed: boolean
}

interface MyDB extends DBSchema {
  tasks: {
    value: TaskProps
    key: string
    indexes: {
      'by-status': string
    }
  }
}

export type {
  TaskProps,
  MyDB
}