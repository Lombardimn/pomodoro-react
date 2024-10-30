import { Navigate, Route, Routes } from "react-router-dom"
import { ReactNode } from "react"
import { NotFound } from "@/pages"

interface RoutesWithNotFoundProps {
  children: ReactNode
}

const RoutesWithNotFound = ( { children }: RoutesWithNotFoundProps ) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}

export { RoutesWithNotFound }