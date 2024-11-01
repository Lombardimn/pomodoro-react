import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppHookContainer } from '@/AppHookContainer.tsx'
import { initDB } from '@/database'
import './index.css'

initDB().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppHookContainer />
    </StrictMode>,
  )
})
