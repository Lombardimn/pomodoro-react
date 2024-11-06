import { intTagProps } from "@/models"

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

export type { TaskProps }