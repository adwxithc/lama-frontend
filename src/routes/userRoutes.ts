
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/layout/UserLayout";
import LandingPage from "../pages/LandingPage";
import SingleProject from "../components/layout/ProjectLayout";
import EditProject from "../pages/EditProject";
import UploadPodcase from "../pages/UploadPodcast";

const userRoutes = createBrowserRouter([
    {
        path: '/',
        Component: UserLayout,
        children:[
            {
                index:true,
                Component:LandingPage
            },
            {
                path:'/project/:name',
                Component:SingleProject,
                children:[
                    {
                        path:'',
                        children:[
                            {
                                index:true,
                                Component:UploadPodcase
                            },
                            {
                                path:'edit',
                                Component:EditProject
        
                            },
        
                            
                        ]
                    },
                    {
                        path:'widget-config'
                    }
                ]
                
            }
        ]
    },
    
])

export default userRoutes