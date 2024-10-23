import { TagProps } from "@/models"

const Tag = ({ id, tag, background, color, pin }: TagProps) => {
  return (
    <div 
      key={id}
      className={"relative inline-flex items-center rounded-full text-sm px-3 py-1" + (background ? ` ${background}` : '') + (color ? ` ${color}` : '')}
    >
      <div className="absolute flex-shrink-0 flex items-center justify-center">
        <span className={"h-1.5 w-1.5 rounded-full text-current " + (pin ? pin : '')} aria-hidden="true"></span>
      </div>
      <span className="block truncate ml-3 text-current">{tag}</span>
    </div>
  )
}

export { Tag }