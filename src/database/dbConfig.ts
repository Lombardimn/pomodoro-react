import { upgradeDatabase } from "@/database"
import { IDBPDatabase, openDB } from "idb"
import { MyDB } from "@/models"

let db: IDBPDatabase<MyDB>

const initDB = async () => {
  db = await openDB<MyDB>(
    'Focusia-App',
    1,
    {
      upgrade(db) {
        upgradeDatabase(db)
      }
    }
  )
}

const getDB = () => db

export { initDB, getDB }