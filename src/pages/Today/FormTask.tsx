import { postTask, updateTask } from "@/database"
import { TaskProps } from "@/models"
import { FormEvent, useState } from "react"

interface Props {
  task?: TaskProps | null
  onSave: () => void
}

const FormTask = ({ task, onSave }: Props) => {
  const [ note, setNote ] = useState(task?.note || '')
  const [ plannedCount, setPlannedCount ] = useState(task?.plannedCount || 0)
  const [ status, setStatus ] = useState(task?.status || '')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (task) {
      await updateTask(
        task.id,
        { note, status, plannedCount }
      )
    } else {
      await postTask({
        note,
        status,
        plannedCount,
        // TODO: falta configurar el resto de datos
        order: 1,
        tags: [
          { id: '91c51568-fc28-4fd3-bc83-eddc3ca11bbb'}
        ],
        today: 1,
        todayOrder: 1,
        createdAt: new Date().toISOString(),
        completed: false
      })
    }

    onSave()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputNote">Notas</label>
        <input
          id="inputNote" 
          type="text" 
          placeholder="Escribir una presentación, codificar una nueva Landig Page..."
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="inputCount">Estimación de pomodoros</label>
        <input
          id="inputCount" 
          type="number" 
          placeholder="Escribir una presentación, codificar una nueva Landig Page..."
          value={plannedCount}
          onChange={e => setPlannedCount(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="inputStatus">Estado</label>
        <input
          id="inputStatus" 
          type="text" 
          placeholder="Escribir una presentación, codificar una nueva Landig Page..."
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
      </div>
      <button type="submit">{task ? 'Actualizar Tarea' : 'Crear Tarea'}</button>
    </form>
  )
}

export { FormTask }