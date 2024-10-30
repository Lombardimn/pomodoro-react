import { ReactNode, useState } from "react"

type Position = 'tooltip-top' | 'tooltip-bottom'

interface TooltipProps {
  position: Position
  content: string
  children?: ReactNode
  class?: string
}

const Tooltip = ({ position, content, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const handleChangeTooltip = () => {
    setShowTooltip(!showTooltip)
  }

  return (
    <div
      onMouseLeave={handleChangeTooltip}
      onMouseEnter={handleChangeTooltip}
      className="flex flex-col items-center justify-center relative gap-5 z-10">
      {children} 
      <div
        className={'w-60 text-sm font-normal bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light text-center rounded-lg p-1 border border-solid border-background-dark dark:border-background-light absolute transition ease-in-out duration-600 hidden ' + (
          showTooltip 
            ? position 
            : 'hidden'
        )}>
        {content}
        <div className={ 
          position === 'tooltip-top' 
            ? 'tooltip-arrowTop' 
            :  'tooltip-arrowBottom'
        }></div>
      </div>
      
    </div>
  )
}

export { Tooltip }