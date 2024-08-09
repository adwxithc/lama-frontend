import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import userRoutes from "./routes/userRoutes"


function App() {
 

  return (
    <>
      <Suspense  fallback={<div>Loading</div>}>
        <RouterProvider router={userRoutes} />
      </Suspense>
    </>
  )
}

export default App
