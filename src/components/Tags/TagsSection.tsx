import { Tag } from "@/components"
import { TagProps } from "@/models"

const TagsSection = () => {
  const tags: TagProps[] = [
    { id: "1",
      name: "Tag 1",
      color: "text-red-600",
      label: "red",
      enable: false,
      pin: "bg-red-600",
      background: "bg-red-600/10",
    }
  ]

  return (
    <section id="tags" className="flex flex-wrap gap-2 justify-center px-6 py-4">
      <div>
        <ul className="flex flex-wrap gap-2 justify-center">
          {
            tags.map(({ id, name, background, color, pin, enable, label }, index) => (
              <li key={index}>
                <Tag id={id} name={name} background={background} color={color} pin={pin} enable={enable} label={label}/>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export { TagsSection }