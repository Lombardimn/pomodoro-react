import { ModalProvider } from "@/components"
import { GlobalProvider } from "@/context"
import { AppRouter } from "@/AppRouter"

const AppHookContainer = () => {
  return (
    <GlobalProvider>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
  </GlobalProvider>
  )
}

export { AppHookContainer }