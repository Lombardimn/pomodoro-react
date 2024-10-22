import { Icon, IconLink, Tooltip } from "@/components"
import { ButtonLink } from "@/models"


const TimerControls = () => {
  const TimerDisplay = () => {
    console.log("TimerControls")
  }
  
  const actionButtons: ButtonLink[] = [
    { type: "button",
      label: "Haz clic para cambiar a un temporizador infinito.",
      icon: "infinity",
      parentMethod: TimerDisplay
    },
    { type: "button", 
      label: "Haga clic para desactivar los pomodoros de inicio automático.",
      icon: "repeat",
      parentMethod: TimerDisplay
    },
    { type: "button", 
      label: "0 pomodoros, pausa larga después de 1 pomodoro.",
      icon: "circle",
      parentMethod: TimerDisplay
    }
  ]

  return (
    <section className="flex items-center justify-center gap-4 my-6 border border-blue-800">
      {
        actionButtons.map(({ type, label, icon, parentMethod }, index) => (
          <Tooltip
            key={index}
            position="tooltip-bottom"
            content={label}
          >
            <IconLink
              type={type}
              label={label}
              icon={icon}
              parentMethod={parentMethod}
            >
              <Icon icon={icon} color="currentColor" size="32" />
            </IconLink>
          </Tooltip>
        ))
      }
    </section>
  )
}

export { TimerControls }