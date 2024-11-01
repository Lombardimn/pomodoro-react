import { AppLayout } from "@/AppLayout"
import { IconLink, Modal, useModalContext } from "@/components"
import { deleteTask, getTasks } from "@/database"
import { TaskProps } from "@/models"
import { FormTask } from "@/pages"
import { useEffect, useState } from "react"

const TodayPage = () => {
  const { setState } = useModalContext()
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleOpenModal = (id: string) => {
    setSelectedTask(tasks[0])
    setState(id)
  }

  const fetchTasks = async () => {
    const ts = await getTasks();
    setTasks(ts);
  }

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTasks();
  }

  const handleSave = () => {
    setSelectedTask(null)
    fetchTasks()
    setState(null)
  }

  return (
    <AppLayout>
      <section className="mx-auto px-6 mt-6">
        <div>
          <h2 className="text-lg leading-6 font-medium">Hoy</h2>
          <p className="mt-1 text-sm ">Planifica tus actividades específicamente para hoy.</p>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <IconLink 
            type="button"
            label="Crear una nueva tarea"
            parentMethod={() => handleOpenModal('modalTask')}
            icon="empty"
            class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 disabled:bg-purple-400 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm"
          >
            Crear una nueva tarea
          </IconLink>
          <IconLink 
            type="button"
            label="Crear una nueva tarea"
            parentMethod={() => {}}
            icon="empty"
            class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 disabled:bg-purple-400 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm"
          >
            Borrar
          </IconLink>
        </div>
      </section>

      {
        tasks &&
          <section className="mx-auto px-6 mt-6">
            {tasks.map((task) => (
              <li key={task.id}>
                <p>{task.note}</p>
                <p>{task.status}</p>
                <p>{task.plannedCount}</p>
                <p>{task.today}</p>
                <p>{task.todayOrder}</p>
                <p>{task.createdAt}</p>
                <p>{task.completed}</p>
                <button onClick={() => handleOpenModal('modalTask')}>Editar</button>
                <button onClick={() => handleDelete(task.id)}>Borrar</button>
              </li>
            ))}
          </section>
      }

      <Modal id="modalTask" title="Crear una nueva tarea" className="absolute top-20 py-3 z-50 w-auto bg-background-light rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light transition ease-in-out duration-300">
        <FormTask onSave={handleSave} task={selectedTask} />
      </Modal>
    </AppLayout>
  )
}

export { TodayPage }