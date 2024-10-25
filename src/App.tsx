import { Navbar, PomodoroTimer } from "@/components"
import { BrowserRouter as Router } from "react-router-dom"
import { useGlobalContext } from "@/context"
import { useLocalStorage } from "@/Hooks"
import { EmptyLocalStorage, LocalStorageProps } from "@/models"
import { useEffect } from "react"

function App() {
  const { value } = useGlobalContext()
  const { storedData } = useLocalStorage()

  useEffect(() => {
    const result: LocalStorageProps = storedData() ?? EmptyLocalStorage

    if (result.theme) {
      document.documentElement.classList.replace( 
        result.theme === 'dark'
          ? 'light' 
          : 'dark', 
      result.theme)
    }

  }, [value, storedData])

  return (
    <Router>
      <Navbar />
      <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <PomodoroTimer />
      </main>
    </Router>
  )
}

export default App
