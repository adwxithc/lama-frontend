import { Trash2 } from "lucide-react"
import Button from "./ui/Button"
import { IEpisode } from "../types/data"
import { useDeleteEpisodeMutation } from "../redux/feature/userApiSlice"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"


function DeleteEpisode({closeModal,episode}:{closeModal:()=>void,episode:IEpisode}) {
    const [deleteEpisode] =useDeleteEpisodeMutation()
    const { projectId='' } = useParams();
    const handleDeleteEpisode =async()=>{
        try {
            const res =await deleteEpisode({episodeId:episode.id,projectId})
            console.log(res);
            
            closeModal()
        } catch{
            toast.error('something went wrong');
        }
       
    }
    return (
        <div className="p-2">
            <div className="flex justify-center mb-2 p-1"><Trash2 color="red" /></div>

            <h3 className="text-center mb-3 font-semibold text-xl"> Delete Episode?</h3>
            <p className="text-center mb-5 flex flex-wrap justify-center">Are you sure you want to delete episode <span className="font-semibold max-w-32 truncate">"{episode.name}"</span></p>
            <div className="flex justify-end">
                <Button className="text-red-500" onClick={closeModal}>Cancel</Button>
                <Button varient={'primary'} size={'sm'} onClick={handleDeleteEpisode}>Confirm</Button>
            </div>

        </div>
    )
}

export default DeleteEpisode
