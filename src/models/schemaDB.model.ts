import { PomodoroProps, TagProps, TaskProps } from "@/models"
import { DBSchema } from "idb"

interface MyDB extends DBSchema {
  tasks: {
    value: TaskProps
    key: string
    indexes: {
      'by-status': string
    }
  }
  tags: {
    value: TagProps
    key: string
    indexes: {
      'by-name': string
    }
  }
  entries: {
    value: PomodoroProps
    key: string
    indexes: {
      'by-date': Date
    }
  }
  history: {
    value: string
    key: string
    indexes: {
      'by-timestamp': Date
    }
  }
}

export type { MyDB }