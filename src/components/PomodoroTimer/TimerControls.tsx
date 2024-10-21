import { Icon, IconLink } from "@/components"
import { ButtonLink } from "@/models"



const TimerControls = () => {
  const TimerDisplay = () => {
    console.log("TimerControls")
  }
  
  const actionButtons: ButtonLink[] = [
    { type: "button",
      label: "Haz clic para cambiar a un temporizador infinito.",
      icon: "gear",
      parentMethod: TimerDisplay
    },
    { type: "button", 
      label: "Haga clic para desactivar los pomodoros de inicio automático.",
      icon: "question",
      parentMethod: TimerDisplay
    },
    { type: "button", 
      label: "0 pomodoros, pausa larga después de 1 pomodoro.",
      icon: "question",
      parentMethod: TimerDisplay
    }
  ]

  return (
    <section>
      {
        actionButtons.map(({ type, label, icon, parentMethod }, index) => (
          <IconLink
            key={index}
            type={type}
            label={label}
            icon={icon}
            parentMethod={parentMethod}
          >
            <Icon
              icon={icon}
              color="currentColor"
              size="24"/>
          </IconLink>
        ))
      }
    </section>
  )
}

export { TimerControls }