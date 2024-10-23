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
    }
  ]

    // { type: "button", 
    //   label: "0 pomodoros, pausa larga después de 1 pomodoro.",
    //   icon: "circle",
    //   parentMethod: TimerDisplay
    // }

  return (
    <section id='settings' className="flex items-center justify-center gap-4 my-4 text-text-light dark:text-text-dark">
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
              <Icon icon={icon} color="currentColor" size="24" />
            </IconLink>
          </Tooltip>
        ))
      }
      <Tooltip
        position="tooltip-bottom"
        content="0 pomodoros, pausa larga después de 1 pomodoro."
      >
        <button onClick={TimerDisplay} className="w-6 h-6 rounded-full flex items-center justify-center bg-background-dark/20 dark:bg-background-light/20 border-2 border-solid border-background-dark dark:border-background-light">
          <span className="text-text-light dark:text-text-dark text-sm font-semibold leading-none">
            {2}
          </span>
        </button>
      </Tooltip>
    </section>
  )
}

export { TimerControls }