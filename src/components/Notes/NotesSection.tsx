import { Icon, IconLink } from "@/components"
import { NoteProps } from "@/models"
import { useState } from "react"

const NotesSection = () => {
  const [showNotes, setShowNotes] = useState<boolean>(false)

  const handleShowNotes = () => {
    setShowNotes(!showNotes)
  }

  const notas: NoteProps[] = [
    { id: 1, content: "Nota 1" },
    { id: 2, content: "Nota 2" },
    { id: 3, content: "Nota 3" },
    { id: 4, content: "Nota 4" },
    { id: 5, content: "Nota 5" },
  ]

  return (
    <section id="notes" className="fixed left-0 right-0 w-full overflow-auto">
      <div className="flex flex-col gap-2 px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Notas</h2>
          <IconLink
            type="button"
            label="mostrar/ocultar notas"
            icon="empty"
            parentMethod={handleShowNotes}
          >
            <Icon icon={showNotes ? "caretUp" : "caretDown"} color="currentColor" size="24" />
          </IconLink>
        </div>
        <div className={showNotes ? "block" : "hidden"}>
          <ul className="pl-3">
            {
              notas.length > 0 && showNotes === true
                ? notas.map(({ id, content }) => (
                  <li key={id}>{content}</li>
                ))
                : <p>No hay notas</p>
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export { NotesSection }