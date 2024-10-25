import { NoteProps, TagProps } from "@/models"

interface TaskProps {
  id: number
  title: string
  status: string
  priority: number
  tags: TagProps[]
  notes: NoteProps[]
  completed: boolean
  createdAt: string
}

export type { TaskProps }