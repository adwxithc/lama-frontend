import { useNavigate } from "react-router-dom"
import { IProject } from "../types/data"
import { getChars } from "../utils/getIcon"
import moment from "moment"


function ProjectCard({project, colorClass}:{project:IProject, colorClass:string}) {
  const icon = getChars(project.name)
  const navigate = useNavigate()
  return (
    <div className="rounded-2xl border border-black/30 shadow-xl h-32 p-2 overflow-hidden  flex cursor-pointer" onClick={()=>navigate(`/project/${project.name}`)}>
    <div className={`aspect-square h-full ${colorClass} rounded-xl flex justify-center items-center`}>
        <span className="text-3xl md:text-6xl font-bold text-white uppercase">{icon}</span>

    </div>
    <div className="px-3 ">
        <h4 className="capitalize text-primary font-bold">{project.name}</h4>
        <p className="text-sm text-black/80">{project.episodes } Episodes</p>
        <span className="text-xs text-black/40">Last edited {moment(project.updatedAt).fromNow()}</span>
    </div>
</div>
  )
}

export default ProjectCard
