import { Navbar, PomodoroTimer } from "@/components"
import { BrowserRouter as Router } from "react-router-dom"
import { useGlobalContext } from "@/context"
import { useEffect } from "react"

function App() {
  const { value } = useGlobalContext()

  useEffect(() => {
    const result = value ? value : localStorage.getItem("theme")

    if (result) {
      localStorage.setItem("theme", result)
      document.documentElement.classList.replace( 
        result === 'dark'
          ? 'light' 
          : 'dark', 
      result)
    }

  }, [value])

  return (
    <Router>
      <Navbar />
      <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark border border-red-400">
        <PomodoroTimer />
      </main>
      
    </Router>
  )
}

export default App
