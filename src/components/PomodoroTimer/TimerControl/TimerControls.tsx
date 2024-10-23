import { Icon, IconLink, Tooltip } from "@/components"
import { ButtonLink } from "@/models"

interface Props {
  objects: ButtonLink[]
  flag: boolean
}

const TimerControls = ({objects, flag}: Props) => {

  return (
    <section id='settings' className="flex items-center justify-center gap-4 my-3 text-text-light dark:text-text-dark">
      {
        objects.map(({ type, label, icon, parentMethod }, index) => (
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

      {
        flag &&
          <Tooltip
            position="tooltip-bottom"
            content="0 pomodoros, pausa larga después de 1 pomodoro."
          >
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-background-dark/20 dark:bg-background-light/20 border-2 border-solid border-background-dark dark:border-background-light">
              <span className="text-text-light dark:text-text-dark text-sm font-semibold leading-none">
                {2}
              </span>
            </div>
          </Tooltip>
      }
    </section>
  )
}

export { TimerControls }