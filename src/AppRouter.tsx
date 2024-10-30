import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { EntryPage, RoutesWithNotFound, TagPage, TaskPage, TimerPage, TodayPage } from "@/pages"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/timer" />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/entries" element={<EntryPage />} />
        <Route path="/tags" element={<TagPage />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export { AppRouter }