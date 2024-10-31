import { AppLayout } from "@/AppLayout"
import { PomodoroTimer } from "@/components"

const TimerPage = () => {
  return (
    <AppLayout>
      <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <PomodoroTimer />
      </main>
    </AppLayout>
  )
}

export { TimerPage }