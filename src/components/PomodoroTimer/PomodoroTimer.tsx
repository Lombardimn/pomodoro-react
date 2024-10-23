import { NotesSection, TagsSection, TimerControls, TimerDisplay } from "@/components"

const PomodoroTimer = () => {
  return (
    <div id="timer-container">
      <TimerControls />
      <TimerDisplay />
      <NotesSection />
      <TagsSection />
    </div>
  )
}

export { PomodoroTimer }