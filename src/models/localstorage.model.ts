import { TagProps, TaskProps, NoteProps, PomodoroProps } from "@/models"

interface LocalStorageProps {
  cycleEnabled: boolean
  theme: string
  tasks: TaskProps[]
  tags: TagProps[]
  notes: NoteProps[]
  pomodoro: PomodoroProps
}

const EmptyLocalStorage: LocalStorageProps = {
  cycleEnabled: false,
  theme: '',
  tasks: [],
  tags: [],
  notes: [],
  pomodoro: {
    id: 0,
    timing: 0,
    shortBreak: 0,
    longBreak: 0,
    length: 0
  }
}

export { EmptyLocalStorage }
export type { LocalStorageProps }

