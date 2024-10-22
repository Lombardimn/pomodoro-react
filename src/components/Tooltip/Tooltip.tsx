import { useState } from "react"

type Position = 'tooltip-top' | 'tooltip-bottom'

interface TooltipProps {
  position: Position
  content: string
  children?: React.ReactNode
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
      className="flex flex-col items-center justify-center relative gap-5">
      {children} 
      <div
        className={'w-40 text-sm font-normal bg-background-dark text-text-dark text-center rounded-lg p-1 border border-solid border-background-dark absolute transition ease-in-out duration-300 hidden ' + (
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