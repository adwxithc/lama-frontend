
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/layout/UserLayout";
import LandingPage from "../pages/LandingPage";
import SingleProject from "../components/layout/ProjectLayout";
import UploadPodcase from "../pages/UploadPodcast";
import EditEpisode from "../pages/EditEpisode";
import WidgetConfiguration from "../pages/WidgetConfiguration";

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
                path:'/project/:projectId',
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
                                path:'episode/:episodeId',
                                Component:EditEpisode
        
                            },
        
                            
                        ]
                    },
                    {
                        path:'widget-config',
                        Component:WidgetConfiguration
                    }
                ]
                
            }
        ]
    },
    
])

export default userRoutes