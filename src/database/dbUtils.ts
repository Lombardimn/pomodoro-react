import { MyDB } from "@/models"
import { IDBPDatabase } from "idb"

const upgradeDatabase = (db: IDBPDatabase<MyDB>) => {
  const store = db.createObjectStore('tasks', {
    keyPath: 'id'
  })

  store.createIndex('by-status', 'status')
}

export { upgradeDatabase }