import { NotesSection, TagsSection, TimerControls, TimerDisplay } from "@/components"

const PomodoroTimer = () => {
  return (
    <div>
      <div>
        <TimerControls />
        <TimerDisplay />
        <NotesSection />
        <TagsSection />
      </div> 
    </div>
  )
}

export { PomodoroTimer }