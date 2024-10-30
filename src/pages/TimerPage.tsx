import { Navbar, PomodoroTimer } from "@/components"

const TimerPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <PomodoroTimer />
      </main>
    </>
  )
}

export { TimerPage }