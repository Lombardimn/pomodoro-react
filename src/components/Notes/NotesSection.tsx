import { Icon, IconLink } from "@/components"
import { useState } from "react"

const NotesSection = () => {
  const [showNotes, setShowNotes] = useState<boolean>(false)

  const handleShowNotes = () => {
    setShowNotes(!showNotes)
  }

  const notas: string[] = [

  ]

  return (
    <section id="notes">
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
                ? notas.map((nota, index) => (
                  <li key={index}>{nota}</li>
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