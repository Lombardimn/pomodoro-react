import { Navbar } from "@/components"
import { BrowserRouter as Router } from "react-router-dom"
import { useGlobalContext } from "./context"
import { useEffect } from "react"

function App() {
  const { value } = useGlobalContext()

  useEffect(() => {
    console.log(value)
    if (value) {
      localStorage.setItem("theme", value)
      document.documentElement.classList.remove("light")
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add(value)
    }

  }, [value])

  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
