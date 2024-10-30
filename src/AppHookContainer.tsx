import { ModalProvider } from "@/components"
import { GlobalProvider } from "@/context"
import { AppRouter } from "@/AppRouter"
import App from "@/App"

const AppHookContainer = () => {
  return (
    <GlobalProvider>
      <ModalProvider>
        <App>
          <AppRouter />
        </App>
      </ModalProvider>
  </GlobalProvider>
  )
}

export { AppHookContainer }