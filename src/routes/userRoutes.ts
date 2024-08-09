
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/layout/UserLayout";
import LandingPage from "../pages/LandingPage";

const userRoutes = createBrowserRouter([
    {
        path: '/',
        Component: UserLayout,
        children:[
            {
                index:true,
                Component:LandingPage
            }
        ]
    }
])

export default userRoutes