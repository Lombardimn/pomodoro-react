import { Tag } from "@/components"
import { TagProps } from "@/models"

const TagsSection = () => {
  const tags: TagProps[] = [
    { id: 1,
      tag: "Tag 1",
      background: "bg-red-600/10",
      pin: "bg-red-600",
      color: "text-red-600"
    },
    { id: 2,
      tag: "Tag 2",
      background: "bg-green-600/10",
      pin: "bg-green-600",
      color: "text-green-600"
    },
    { id: 3,
      tag: "Tag 3",
      background: "bg-blue-600/10",
      pin: "bg-blue-600",
      color: "text-blue-600"
    },
    { id: 4,
      tag: "Tag 4",
      background: "bg-yellow-600/10",
      pin: "bg-yellow-600",
      color: "text-yellow-600"
    },
    { id: 5,
      tag: "Tag 5",
      background: "bg-pink-600/10",
      pin: "bg-pink-600",
      color: "text-pink-600"
    }
  ]

  return (
    <section id="tags" className="flex flex-wrap gap-2 justify-center px-6 py-4">
      <div>
        <ul className="flex flex-wrap gap-2 justify-center">
          {
            tags.map(({ id, tag, background, color, pin}, index) => (
              <li key={index}>
                <Tag id={id} tag={tag} background={background} color={color} pin={pin} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export { TagsSection }