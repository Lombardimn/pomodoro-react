import { Icon, ThemeToggle } from "@/components"
import { useGlobalContext } from "@/context"
import { useLocalStorage } from "@/Hooks"
import { ChangeEvent, useEffect } from "react"

const timingPomodoro: number = 120
const shortBreak: number = 30
const longBreak: number = 60
const lengthPomodoro: number = 8

const PreferenceModal = () => {
  const { value, setValue } = useGlobalContext()
  const { saveData, data } = useLocalStorage()

  useEffect(() => {
    if (data) {
      setValue(data); // Sincroniza el valor inicial del contexto con localStorage
    }
  }, [data, setValue])

  const handleCycle = () => {
    const flagCycle = !value.cycleEnabled
    setValue(prevValue => ({
      ...prevValue,
      cycleEnabled: flagCycle
    }))
    saveData({ cycleEnabled: flagCycle })
  }

  const handleChangeData = (key: string) => (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value)
  
    // Actualizar el contexto con el nuevo valor
    setValue((prevValue) => {
      const updatedPomodoro = {
        ...prevValue.pomodoro,
        [key]: newValue,
      };
  
      // Guardar en localStorage después de actualizar el contexto
      saveData({ pomodoro: updatedPomodoro })
  
      return {
        ...prevValue,
        pomodoro: updatedPomodoro,
      }
    })
  }
  

  return (
    <>
      <div className="flex flex-col items-center mx-auto gap-2 pb-3">
        <div className="bg-hover-light w-12 h-12 rounded-full flex items-center justify-center">
          <Icon icon="gear" color="#f8fafc" size="24" />
        </div>
      </div>
      <section className="flex flex-col gap-2 mb-3 border-b border-text-degraded/20">
        <div>
          <h3 className="text-lg text-text-light font-semibold">Pomodoro</h3>
          <p className="text-sm text-text-degraded">Configura tus pomodoros aquí.</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor='pomodoroLength' className="text-sm font-medium">Duración del Pomodoro</label>
          <select 
            name="pomodoroLength"
            id="pomodoroLength"
            tabIndex={0}
            onChange={handleChangeData('timing')}
            value={data.pomodoro.timing}
            className="text-text-light bg-gray-50 dark:text-text-dark hover:bg-background-degraded cursor-pointer dark:bg-background-dark dark:hover:bg-background-dark/70 hover:border-gray-300 dark:hover:border-gray-600 border border-gray-200 dark:border-gray-700 shadow-sm p-3 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          >
            {
              [...Array(timingPomodoro)].map((_, index) => (
                <option key={index} value={index + 1}>
                 {index + 1} minutos
                </option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col gap-1 py-3">
          <div className="flex gap-2 justify-between items-center py-1">
            <label htmlFor="pomodorosCycles" className="block text-sm font-medium">Inicio automático de pomodoros</label>
            <ThemeToggle id="pomodorosCycles" description="Ciclos automáticos de pomodoros" parentMethod={handleCycle} watch="cycle" iconOn="close" iconOff="check" />
          </div>
          <p className="text-left text-sm">Otro pomodoro no comenzará automáticamente después de un largo descanso.</p>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <div>
        <h3 className="text-lg text-text-light font-semibold">Descansos</h3>
        <p className="text-sm text-text-degraded">Todos necesitamos descansos para mantener la concentración.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='shortBreak' className="text-sm font-medium">Duración del descanso</label>
          <select 
            name="shortBreak"
            id="shortBreak"
            onChange={handleChangeData('shortBreak')}
            value={data.pomodoro.shortBreak}
            className="text-text-light bg-gray-50 dark:text-text-dark hover:bg-background-degraded cursor-pointer dark:bg-background-dark dark:hover:bg-background-dark/70 hover:border-gray-300 dark:hover:border-gray-600 border border-gray-200 dark:border-gray-700 shadow-sm p-3 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          >
            {
              [...Array(shortBreak)].map((_, index) => (
                <option key={index} value={index + 1}>
                {index + 1} minutos
                </option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='longBreak' className="text-sm font-medium">Descanso de larga duración</label>
          <select
            name="longBreak"
            id="longBreak"
            onChange={handleChangeData('longBreak')}
            value={data.pomodoro.longBreak}
            className="text-text-light bg-gray-50 dark:text-text-dark hover:bg-background-degraded cursor-pointer dark:bg-background-dark dark:hover:bg-background-dark/70 hover:border-gray-300 dark:hover:border-gray-600 border border-gray-200 dark:border-gray-700 shadow-sm p-3 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          >
            {
              [...Array(longBreak)].map((_, index) => (
                <option key={index} value={index + 1}>
                {index + 1} minutos
                </option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor='lengthPomodoro' className="text-sm font-medium">Largo descanso después</label>
          <select
            name="lengthPomodoro"
            id="lengthPomodoro"
            onChange={handleChangeData('length')}
            value={data.pomodoro.length}
            className="text-text-light bg-gray-50 dark:text-text-dark hover:bg-background-degraded cursor-pointer dark:bg-background-dark dark:hover:bg-background-dark/70 hover:border-gray-300 dark:hover:border-gray-600 border border-gray-200 dark:border-gray-700 shadow-sm p-3 color-gray-100 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm rounded-md"
          >
            {
              [...Array(lengthPomodoro)].map((_, index) => (
                <option key={index} value={index + 1}>
                {index + 1} pomodoros
                </option>
              ))
            }
          </select>
        </div>
      </section>
    </>
  )
}

export { PreferenceModal }