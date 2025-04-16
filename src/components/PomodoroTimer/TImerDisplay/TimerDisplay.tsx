import { Icon } from "@/components"

const TimerDisplay = () => {

  return (
    <section id="timer">
      <div className="relative text-center w-52 h-52 mx-auto">
        <svg viewBox="0 0 200 200" width="208" height="208" fill="none" className="circles absolute inset-0">
          <circle r="90" cx="100" cy="100" pathLength="1" className="stroke-text-light/10 dark:stroke-text-dark/50"></circle>
          <circle className="progress" r="90" cx="100" cy="100" pathLength="1"></circle>
        </svg>
        <div className="text-text-light dark:text-text-dark absolute inset-0 top-10 select-none uppercase font-medium text-xs">pomodoro</div>
        <div className="absolute inset-0 top-14 select-none uppercase text-xxs text-gray-400">next: pomodoro</div>
        <div className="absolute inset-0 top-20">
          <span id="clock" className="text-4xl select-none">25:00</span>
        </div>
        <div className="absolute inset-0 top-32">
          <button>
            <Icon
              icon="play"
              size="32"
              color="currentColor"
              viewBox="0 0 384 512"
              class="overflow-visible box-content inline-block h-[1em] align-[-.125em] transition-colors text-text-light/20 hover:text-text-light/50 dark:hover:text-text-dark/90 dark:text-text-dark/50 text-[2rem]"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export { TimerDisplay }