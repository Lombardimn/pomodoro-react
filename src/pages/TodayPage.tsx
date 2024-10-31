import { AppLayout } from "@/AppLayout"

const TodayPage = () => {
  return (
    <AppLayout>
      <section className="container mx-auto px-6 sm:px-0">
        <div className="px-4 py-5 sm:px-6 mb-4">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h2 className="text-lg leading-6 font-medium">Hoy</h2>
              <p className="mt-1 text-sm ">Planifica tus actividades específicamente para hoy.</p>
            </div>
            <div className="ml-4 mt-6 flex items-center gap-2">
              <button className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 disabled:bg-purple-400 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm" type="button">Create a new task</button>
              <button className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 disabled:bg-purple-400 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm" type="button">Clear</button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}

export { TodayPage }