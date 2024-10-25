import { TagProps, TaskProps, NoteProps } from "@/models"

interface LocalStorageProps {
  title: string
  theme: string
  tasks: TaskProps[]
  tags: TagProps[]
  notes: NoteProps[]
  pomodoro: string
}

const EmptyLocalStorage: LocalStorageProps = {
  title: '',
  theme: '',
  tasks: [],
  tags: [],
  notes: [],
  pomodoro: ''
}

export { EmptyLocalStorage }
export type { LocalStorageProps }

