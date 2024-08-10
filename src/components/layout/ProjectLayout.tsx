
import { useState } from "react"
import SideBar from "../SideBar"
import { Outlet } from "react-router-dom"

function ProjectLayout() {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="flex ">
           <SideBar expanded={expanded} />
            <div className={`${expanded?'hidden sm:block':'block'} w-full h-screen overflow-y-auto  overflow-x-hidden`}>
                <span onClick={()=>setExpanded(p=>!p)}>k</span>
                <Outlet />

            </div>

        </div>
    )
}

export default ProjectLayout
