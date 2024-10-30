import { Icon, ThemeToggle } from "@/components"
import { useGlobalContext } from "@/context"
import { useLocalStorage } from "@/Hooks"

const timingPomodoro: number = 120
const shortBreak: number = 30
const longBreak: number = 60
const lengthPomodoro: number = 8

const PreferenceModal = () => {
  const { value, setValue } = useGlobalContext()
  const { saveData, data } = useLocalStorage()

  const handleCycle = () => {
    const flagCycle = value.cycleEnabled === true ? false : true
    saveData({ cycleEnabled: flagCycle })
    setValue(prevValue => ({
      ...prevValue,
      cycleEnabled: flagCycle
    }))
  }

  const handleChangeData = (key: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value)
    const updatedPomodoro = {
      ...value.pomodoro,
      [key]: newValue,
    }

    setValue((prevValue) => ({
      ...prevValue,
      pomodoro: updatedPomodoro
    }))

    saveData({ pomodoro: value.pomodoro })
  }

  return (
    <>
      <div>
        <Icon icon="gear" color="currentColor" size="24" />
        <h2>Configuraciones</h2>
      </div>
      <section>
        <div>
          <h3>Pomodoro</h3>
          <p>Configura tus pomodoros aquí.</p>
        </div>
        <div>
          <label htmlFor='pomodoroLength'>Duración del Pomodoro</label>
          <select 
            name="pomodoroLength"
            id="pomodoroLength"
            tabIndex={0}
            onChange={handleChangeData('timing')}
            value={data.pomodoro.timing}
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

        <div>
          <label htmlFor="pomodorosCycles">Inicio automático de pomodoros</label>
          <ThemeToggle id="pomodorosCycles" parentMethod={handleCycle} watch="cycle" iconOn="close" iconOff="check" />
          <p>Otro pomodoro no comenzará automáticamente después de un largo descanso.</p>
        </div>
      </section>

      <section>
        <div>
          <h3>Descansos</h3>
          <p>Todos necesitamos descansos para mantener la concentración.</p>
        </div>

        <div>
          <label htmlFor='shortBreak'>Duración del descanso</label>
          <select 
            name="shortBreak"
            id="shortBreak"
            onChange={handleChangeData('shortBreak')}
            value={data.pomodoro.shortBreak}
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

        <div>
          <label htmlFor='longBreak'>Descanso de larga duración</label>
          <select
            name="longBreak"
            id="longBreak"
            onChange={handleChangeData('longBreak')}
            value={data.pomodoro.longBreak}
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

        <div>
          <label htmlFor='lengthPomodoro'>Largo descanso después</label>
          <select
            name="lengthPomodoro"
            id="lengthPomodoro"
            onChange={handleChangeData('length')}
            value={data.pomodoro.length}
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