import { TagProps } from "@/models"
import { getDB } from "@/database"
import { v4 as uuidv4 } from 'uuid'


const postTag = async (tag: Omit<TagProps,'id'>) => {
  const db = getDB()
  const id = uuidv4()

  await db.put('tags', { ...tag, id })
}

const getTags = async () => {
  const db = getDB()
  return await db.getAll('tags')
}

const updateTag = async (id: string, updates: Partial<TagProps>) => {
  const db = getDB()
  const tag = await db.get('tags', id)
  if (tag) {
    const updatedTag = { ...tag, ...updates }
    await db.put('tags', updatedTag)
  }
}

const deleteTag = async (id: string) => {
  const db = getDB()
  await db.delete('tags', id)
}

export {
  postTag,
  getTags,
  updateTag,
  deleteTag
}