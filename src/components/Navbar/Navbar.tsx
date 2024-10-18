import { AnchorLink, ButtonLink } from "@/models"
import { Icon, IconLink } from "@/components"

const textLinks: AnchorLink[] = [
  { type: "anchor", label: "Temporizador", href: "#", icon: "empty" },
  { type: "anchor", label: "Hoy", href: "#", icon: "empty" },
  { type: "anchor", label: "Tareas", href: "#", icon: "empty" },
  { type: "anchor", label: "Registros", href: "#", icon: "empty" },
  { type: "anchor", label: "Etiquetas", href: "#", icon: "empty" },
]

const modalButtons: ButtonLink[] = [
  { type: "button", label: "Configuraciones", icon: "gear", onClick: () => {console.log("Configuraciones")} },
  { type: "button", label: "Ayuda", icon: "question", onClick: () => {console.log("Ayuda")} },
]

const Navbar = () => {
  return (
    <header className="px-6 bg-slate-800 text-white font-medium">
      <nav className="h-16 flex justify-between items-center">
        <section>
          <a href="/">
            <img src="/vite.svg" alt="logo de web" />
          </a>

          {/* <menu-button>
            <template>
            <button>
              <span>Menu</span>
              icono
            </button>
            </template>
          </menu-button> */}
        </section>

        <section>
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

        <section className="flex space-x-2">
          {
            modalButtons.map(({ label, icon, onClick, type }, index) => (
              <IconLink
                key={index}
                type={type}
                label={label}
                onClick={onClick}
                icon={icon}
                class=""
              >
                <Icon 
                  icon={icon}
                  color="white"
                  size="32"/>
              </IconLink>
            ))
          }
        </section>
      </nav>
    </header>
  )
}

export { Navbar }