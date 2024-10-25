import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalProvider } from '@/components'
import { GlobalProvider } from '@/context'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </GlobalProvider>
  </StrictMode>,
)
