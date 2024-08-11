import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import { useParams } from "react-router-dom"

function EditEpisode() {
    const {projectId='', episodeId=''} = useParams()
    return (
        <div className="p-10">
            <div className="text-xl mb-8">
                <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'Project', link: `/project/${projectId}` },{label:'Edit',link:`/project/${projectId}/edit/${episodeId}`}]} />
            </div>

        </div>
    )
}

export default EditEpisode
