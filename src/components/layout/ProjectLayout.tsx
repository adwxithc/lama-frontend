
import { useState } from "react"
import SideBar from "../SideBar"
import { Outlet } from "react-router-dom"
import Button from "../ui/Button"
import { ChevronRight } from "lucide-react"

function ProjectLayout() {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="flex ">
           <SideBar expanded={expanded} closeSidebar={()=>setExpanded(false)} />
            <div className={`${expanded?'hidden sm:block':'block'} w-full h-screen overflow-y-auto  overflow-x-hidden`}>
                <Button onClick={()=>setExpanded(true)} className="mt-5 inline-block sm:hidden" ><ChevronRight /></Button>
                <Outlet />

            </div>

        </div>
    )
}

export default ProjectLayout
