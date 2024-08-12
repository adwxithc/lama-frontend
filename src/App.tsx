import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import userRoutes from "./routes/userRoutes"
import Loading from "./components/Loading"


function App() {
 

  return (
    <>
      <Suspense  fallback={<Loading />}>
        <RouterProvider router={userRoutes} />
      
      </Suspense>
    </>
  )
}

export default App
