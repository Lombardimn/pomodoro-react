import { AnchorLink, ButtonLink } from "@/models"
import { Icon, IconLink, Modal, PreferenceModal, ThemeToggle, useModalContext } from "@/components"
import { useState } from "react"

const Navbar = () => {
  const textLinks: AnchorLink[] = [
    { type: "anchor", label: "Temporizador", href: "/", icon: "empty" },
    { type: "anchor", label: "Hoy", href: "/today", icon: "empty" },
    { type: "anchor", label: "Tareas", href: "/tasks", icon: "empty" },
    { type: "anchor", label: "Registros", href: "/records", icon: "empty" },
    { type: "anchor", label: "Etiquetas", href: "/tags", icon: "empty" },
  ]

  const [open, setOpen] = useState<boolean>(false)
  const { setState } = useModalContext()

  const handleOpenModal = (id : string) => {
    setState(id)
  }

  const modalButtons: ButtonLink[] = [
    { type: "button", label: "Configuraciones", icon: "gear", parentMethod: () => handleOpenModal('modalSettings') },
    { type: "button", label: "Ayuda", icon: "question", parentMethod: () => handleOpenModal('modalSupport') },
  ]

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <header className="px-6 dark:bg-background-light/5 dark:text-text-dark bg-background-light text-text-light font-medium shadow-md">
      <nav className="h-16 flex justify-between items-center">
        <section>
          <a href="/">
            <Icon
              icon="logo"
              size="64"
              color="currentColor"
              viewBox="0 0 500 500"
              class="text-text-light dark:text-text-dark"
            />
          </a>
        </section>

        <section className="hidden md:block">
          <ul className="flex justify-between items-center space-x-8">
            {
              textLinks.map(({ label, href, active, type, icon }, index) => (
                  <li key={index}>
                    <IconLink
                      type={type}
                      icon={icon}
                      label={label}
                      href={href}
                      active={active}
                      class="" />
                  </li>
              ))
            }
          </ul>
        </section>
        <div className="flex justify-between items-center space-x-4">
          <section className="flex space-x-2">
            {
              modalButtons.map(({ label, icon, parentMethod, type }, index) => (
                <IconLink
                  key={index}
                  type={type}
                  label={label}
                  parentMethod={parentMethod}
                  icon={icon}
                  class=""
                >
                  <Icon 
                    icon={icon}
                    color="currentColor"
                    size="24"/>
                </IconLink>
              ))
            }
          </section>

          <Modal title="Configuraciones" id="modalSettings" className="absolute top-20 p-3 z-50 w-auto bg-background-light rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light transition ease-in-out duration-300">
            <button onClick={() =>handleOpenModal('modalPreferences')}>Administrar Preferencias</button>
            <button onClick={() => console.log('Estado')}>Administrar Estados</button>
            <button onClick={() => console.log('Datos')}>Gestión de Datos</button>
          </Modal>

          <Modal title="Soporte" id="modalSupport" className="absolute top-20 p-3 z-50 w-auto bg-background-light rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light transition ease-in-out duration-300">
            <h2>¿Necesita ayuda?</h2>
            <button onClick={() =>console.log('FQA')}>Preguntas Frecuentes</button>
            <button onClick={() =>console.log('Contacto')}>Contactanos</button>
          </Modal>

          <Modal title="Preferencias" id="modalPreferences" className="absolute top-20 p-3 z-50 w-auto bg-background-light rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light transition ease-in-out duration-300">
            <PreferenceModal />
          </Modal>

          <section className="md:hidden bg-background-light/15 rounded-lg p-1 border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light">
              <button onClick={handleMenu} className="flex justify-between items-center">
                <span hidden>Menu</span>
                <Icon
                  icon={open ? "close" : "bar"}
                  color="currentColor"
                  size="24" />
              </button>
            </section>
          </div>

          <section className={open ? "absolute z-20 w-full top-16 left-0 pt-1 pb-6 space-y-1 rounded-b-xl flex flex-col justify-between items-left shadow-lg border-b border-b-text-dark/15 bg-background-light dark:bg-background-dark" : "hidden"}>
            {
              textLinks.map(({ label, href, active, type, icon }, index) => (
                <IconLink
                  key={index}
                  type={type}
                  icon={icon}
                  label={label}
                  href={href}
                  active={active}
                  class="py-2 pl-3 pr-4 w-full border-l-4 border-transparent hover:border-l-4 hover:border-background-dark/50 hover:bg-background-dark/10 dark:hover:bg-background-light/20 dark:hover:border-text-dark/40" />
              ))
            }
            <div className="pt-4 pr-6 flex justify-end items-center border-t dark:border-text-dark/5 border-text-light/5">
              <ThemeToggle />
            </div>
          </section>
      </nav>
    </header>
  )
}

export { Navbar }