import { Icon, IconLink } from "@/components"
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
          { id: '91c51568-fc28-4fd3-bc83-eddc3ca11bbb', name: 'Tag 1' },
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
    <>
      <div className="flex flex-col items-center mx-auto gap-2 pb-3">
        <div className="bg-hover-light w-12 h-12 rounded-full flex items-center justify-center">
          <Icon icon="queue" color="#f8fafc" size="24" />
        </div>
        <p className="mt-4 mb-8 text-sm text-text-degraded">Cree una nueva tarea, asignada al día de hoy. Puede gestionar esta tarea desde la página de tareas.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex flex-col justify-between mb-6">
          <label htmlFor="inputNote" className="block text-sm font-medium">Nota</label>
          <input
            id="inputNote" 
            type="text" 
            placeholder="Escribir una presentación..."
            value={note}
            onChange={e => setNote(e.target.value)}
            className="text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm p-3 mt-1 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          />
        </div>

        <div className="flex flex-col justify-between mb-6">
          <label htmlFor="inputCount" className="block text-sm font-medium">Estimación de pomodoros</label>
          <input
            id="inputCount" 
            type="number"
            value={plannedCount}
            onChange={e => setPlannedCount(parseInt(e.target.value))}
            className="text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm p-3 mt-1 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          />
        </div>

        <div className="flex flex-col justify-between mb-6">
          <label htmlFor="inputStatus" className="block text-sm font-medium">Estado</label>
          <input
            id="inputStatus" 
            type="text" 
            placeholder="Seleccione un estado..."
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm p-3 mt-1 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          />
        </div>

        <div className="flex flex-col justify-between mb-6">
          <label htmlFor='selectTags' className="block text-sm font-medium">Etiquetas</label>
          <select
            name="selectTags"
            id="selectTags"
            tabIndex={0}
            onChange={e => setStatus(e.target.value)}
            className="text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm p-3 mt-1 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          >
            {
              task ? (
                task.tags.map((tag, index) => (
                  <option key={index} value={tag.id}>{tag.name}</option>
                ))
              ) : (
                <option value="">Seleccione una etiqueta...</option>
              )
            }
          </select>
        </div>

        <div className="flex flex-col justify-between mb-6">
          <ul>
            {
              task &&
                task.tags.map((tag, index) => (
                  <li key={index}>
                    <div>{tag.id}</div>
                    <IconLink
                      icon="empty"
                      type="button"
                      label="Eliminar etiqueta"
                      parentMethod={() => console.log('eliminada')}
                    >
                      <Icon icon="trash" color="red" size="24" />
                    </IconLink>
                  </li>
                ))
            }
          </ul>
        </div>
        <button type="submit" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm">{task ? 'Actualizar Tarea' : 'Crear Tarea'}</button>
      </form>
    </>
  )
}

export { FormTask }