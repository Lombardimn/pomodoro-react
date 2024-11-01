import { IDBPDatabase, openDB } from "idb"
import { MyDB } from "@/models"

let db: IDBPDatabase<MyDB>

const initDB = async () => {
  db = await openDB<MyDB>(
    'Focusia-App',
    1,
    {
      upgrade(db) {
        const store = db.createObjectStore('tasks', {
          keyPath: 'id',
        })

        store.createIndex('by-status', 'status')
      }
    }
  )
}

const getDB = () => db

export { initDB, getDB }