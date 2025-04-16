import { EmptyLocalStorage, LocalStorageProps } from "@/models"
import { useEffect, useState } from "react"

const useLocalStorage = () => {
  const [ data, setData ] = useState<LocalStorageProps>(EmptyLocalStorage)
  const LOCAL_STORAGE_KEY = "Focusia-App"
  
  const storedData = () => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    return data ? JSON.parse(data) : EmptyLocalStorage
  };

  // Inicializar DATA
  useEffect(() => {
    const storeData = storedData()

    if (storeData) {
      setData(storeData)
    }
  }, [])

  // Guardar DATA
  const saveData = (value: Partial<LocalStorageProps>) => {
    const getData = storedData()
    const currentData = getData ? getData : EmptyLocalStorage
    const newData = { ...currentData, ...value }

    setData(newData)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
  }

  // Borrar DATA
  const deleteData = () => {
    setData(EmptyLocalStorage)
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  return {
    data,
    saveData,
    deleteData,
    storedData
  }
}

export { useLocalStorage }