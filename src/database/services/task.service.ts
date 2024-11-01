import { TaskProps } from "@/models"
import { getDB } from "@/database"
import { v4 as uuidv4 } from 'uuid'

const postTask = async ( task: Omit<TaskProps, 'id'>) => {
  const db = getDB()
  const id = uuidv4()
  
  await db.put('tasks', { ...task, id })
}

const getTasks = async () => {
  const db = getDB()

  return await db.getAll('tasks')
}

const updateTask = async (id: string, updates: Partial<TaskProps>) => {
  const db = getDB()
  const task = await db.get('tasks', id)

  if (task) {
    const updatedTask = { ...task, ...updates }
    await db.put('tasks', updatedTask)
  }
}

const deleteTask = async (id: string) => {
  const db = getDB()
  await db.delete('tasks', id)
}

export { 
  postTask,
  getTasks,
  updateTask,
  deleteTask
}