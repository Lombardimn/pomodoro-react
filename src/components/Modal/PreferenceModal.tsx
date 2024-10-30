import { Icon, ThemeToggle } from "@/components"

const lengthOptions: number = 120
const shortBreak: number = 30
const longBreak: number = 60
const lengthPomodoro: number = 8

const PreferenceModal = () => {
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
          <select name="pomodoroLength" id="pomodoroLength" tabIndex={0}>
            {
              [...Array(lengthOptions)].map((_, index) => (
                <option key={index} value={index + 1}>
                 {index + 1} minutos
                </option>
              ))
            }
          </select>
        </div>

        <div>
          <label htmlFor="pomodorosCycles">Inicio automático de pomodoros</label>
          <ThemeToggle id="pomodorosCycles" />
          <p>Otro pomodoro no comenzará automáticamente después de un largo descanso.</p>
        </div>
      </section>

      <section>
        <div>
          <h3>Descansos</h3>
          <p>Todos necesitamos descansos para mantener la concentración.</p>
        </div>

        <div>
          <label htmlFor='breakLength'>Duración del descanso</label>
          <select name="breakLength" id="breakLength">
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
          <label htmlFor='breakLength'>Descanso de larga duración</label>
          <select name="breakLength" id="breakLength">
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
          <label htmlFor='breakLength'>Largo descanso después</label>
          <select name="breakLength" id="breakLength">
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