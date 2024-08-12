
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const LandingPage = lazy(() => import('../pages/LandingPage'));
const SingleProject = lazy(() => import('../components/layout/ProjectLayout'));
const UploadPodcast = lazy(() => import('../pages/UploadPodcast'));
const EditEpisode = lazy(() => import('../pages/EditEpisode'));
const WidgetConfiguration = lazy(() => import('../pages/WidgetConfiguration'));
const Account = lazy(() => import('../pages/Account'));
const UserLayout = lazy(()=>import('../components/layout/UserLayout'))
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
                                Component:UploadPodcast
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
                    },
                    {
                        path:'account',
                        Component:Account
                    }
                ]
                
            },
           
        ]
    },
    
])

export default userRoutes