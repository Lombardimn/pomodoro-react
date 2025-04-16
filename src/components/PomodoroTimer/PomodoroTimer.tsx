import { NotesSection, TagsSection, TimerControls, TimerDisplay } from "@/components"
import { ButtonLink } from "@/models"

const PomodoroTimer = () => {
  const handleTimer = () => {
    console.log("TimerControls")
  }
  
  const headerButtons: ButtonLink[] = [
    { type: "button",
      label: "Haz clic para cambiar a un temporizador infinito.",
      icon: "infinity",
      parentMethod: handleTimer
    },
    { type: "button", 
      label: "Haga clic para desactivar los pomodoros de inicio automático.",
      icon: "repeat",
      parentMethod: handleTimer
    }
  ]

  const footerButtons: ButtonLink[] = [
    { type: "button", 
      label: "Haga clic para crear una nota.",
      icon: "pencil",
      parentMethod: handleTimer
    },
    { type: "button",
      label: "Haga clic para agregar una nueva etiqueta.",
      icon: "tag",
      parentMethod: handleTimer
    },
    { type: "button",
      label: "Haga clic para remover link.",
      icon: "link",
      parentMethod: handleTimer
    }
  ]

  return (
    <div id="timer-container" className="mt-10">
      <TimerControls objects={headerButtons} flag={true} />
      <TimerDisplay />
      <TimerControls objects={footerButtons} flag={false} />
      <TagsSection />
      <NotesSection />
    </div>
  )
}

export { PomodoroTimer }