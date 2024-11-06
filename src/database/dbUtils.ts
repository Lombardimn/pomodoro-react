import { MyDB } from "@/models"
import { IDBPDatabase } from "idb"

const upgradeDatabase = (db: IDBPDatabase<MyDB>) => {
  // Tabla de 'tasks'
  if (!db.objectStoreNames.contains('tasks')) {
    const tasksStore = db.createObjectStore('tasks', {
      keyPath: 'id'
    })
    tasksStore.createIndex('by-status', 'status')
  }

  // Tabla de 'tags'
  if (!db.objectStoreNames.contains('tags')) {
    const tagsStore = db.createObjectStore('tags', {
      keyPath: 'id'
    })
    tagsStore.createIndex('by-name', 'name')  // índice por nombre
  }

  // Tabla de 'entries'
  if (!db.objectStoreNames.contains('entries')) {
    const entriesStore = db.createObjectStore('entries', {
      keyPath: 'id'
    })
    entriesStore.createIndex('by-date', 'date') // índice por fecha
  }

  // Tabla de 'history'
  if (!db.objectStoreNames.contains('history')) {
    const historyStore = db.createObjectStore('history', {
      keyPath: 'id'
    })
    historyStore.createIndex('by-timestamp', 'timestamp') // índice por timestamp
  }
}

export { upgradeDatabase }