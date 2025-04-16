import { DropdownMenu, Icon, IconLink, Modal, Tag, TimerControls, useModalContext } from "@/components"
import { deleteTask, getTasks } from "@/database"
import { Option, TaskProps } from "@/models"
import { useEffect, useState } from "react"
import { useLocalStorage } from "@/Hooks"
import { AppLayout } from "@/AppLayout"
import { FormTask } from "@/pages"

const TodayPage = () => {
  const { setState } = useModalContext()
  const { data } = useLocalStorage()
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null)

  // Obtener los totales del dia
  const { pomodoro } = data
  const sessionDuration  = pomodoro.timing
  const totalSessions = tasks.reduce((acc, task) => acc + task.plannedCount, 0)
  const totalMinutes = totalSessions * sessionDuration
  
  // Formatear los totales
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

  const options: Option[] = [
    { label: 'Proxíma', color: 'rgb(62, 193, 254)' },
    { label: 'Activa', color: 'rgb(193, 77, 255)' },
    { label: 'Listo', color: 'rgb(83, 243, 190)' },
  ]

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleOpenModal = (id: string) => {
    setSelectedTask(null)
    setState(id)
  }

  const handleOpenModalEdit = (id: string, task: TaskProps) => {
    setSelectedTask(task)
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
          <>
            <section className="mx-auto px-6 mt-6">
              <ul className="flex justify-between text-sm ">
                <li>Concretado: 00:00 / 0 sesiones</li>
                <li>Estimado: {formattedTime} / {totalSessions} sesiones</li>
              </ul>
              <div className="mt-1 w-full h-2 bg-gray-400 rounded flex justify-between">
                <div className="bg-emerald-400 h-full rounded-l w-1/2"></div>
                <div className="bg-rose-400 h-full rounded-r w-1/2"></div>
              </div>
            </section>

            <section className="mx-auto px-6 mt-6">
              <h3 className="text-md font-medium">La prioridad de hoy</h3>
                {
                  tasks.map((task, index) => {
                    const pomodoroButtons = [
                      {
                        type: "button" as const,
                        label: `Se han estimado ${task.plannedCount} pomodoros`,
                        icon: 'clock' as const,
                        parentMethod: () => {}
                      }
                    ]

                    return (
                      <div key ={task.id} className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 border mt-2 rounded-md">
                        <ul className="divide-gray-100 dark:divide-gray-700 relative z-0 divide-y">
                          <li key={`${index}-${task.id}`} className="flex flex-col py-3">
                            <div className="flex justify-between items-center text-gray-500 gap-2">
                              <div className="flex items-center gap-2">
                                <IconLink
                                  type="button"
                                  label="Iniciar"
                                  parentMethod={() => {}}
                                  icon="empty"
                                  class="w-9 h-9 rounded-full flex justify-center items-center disabled:text-gray-200 text-gray-400 hover:text-purple-500 disabled:hover:text-gray-200"
                                >
                                  <Icon icon="play" color="currentColor" size="24" viewBox="0 0 384 512" />
                                </IconLink>
                                <Icon icon="note" color="currentColor" size="24"/>
                                <ul className="flex gap-3">
                                  {
                                    task.tags.map((tag, index) => (
                                      <li key={`${index}-${tag.id}`}>
                                        <Tag
                                          id={tag.id}
                                          name="Tag 1"
                                          background="bg-red-600/10"
                                          pin="bg-red-600"
                                          color="text-red-600"
                                          label="red"
                                          enable={false}
                                        />
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                              <div className="flex items-center gap-2 mx-1">
                                <TimerControls objects={pomodoroButtons} flag={false} />

                                <DropdownMenu options={options} />

                                <button onClick={() => handleOpenModalEdit('modalTask', task)}>
                                  <Icon icon="pencil" color="currentColor" size="24" />
                                </button>
                                <button onClick={() => handleDelete(task.id)}>
                                  <Icon icon="trash" color="currentColor" size="24" />
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )
                  })
                }
            </section>
          </>
      }

      <Modal id="modalTask" title="Gestionar Tarea" className="absolute top-20 p-3 mx-3 z-50 w-auto bg-background-light rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light transition-all ease-in-out duration-300">
        <FormTask onSave={handleSave} task={selectedTask} />
      </Modal>
    </AppLayout>
  )
}

export { TodayPage }