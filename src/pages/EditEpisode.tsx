import { Home, Pencil } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "../components/ui/Button"
import { TextArea } from "../components/ui/TextArea"
import { useEffect, useMemo, useState } from "react"
import { IEpisode } from "../types/data"
import { useEditEpisodeMutation } from "../redux/feature/userApiSlice"
import toast from "react-hot-toast"
import { MoonLoader } from "react-spinners"

function EditEpisode() {
    const { projectId = '', episodeId = '' } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [editEpisode, { isLoading }] = useEditEpisodeMutation()

    const [editMode, setEditMode] = useState(false)
    const [description, setDescription] = useState('')

    const episode = useMemo(() => {
        return location.state.episode as IEpisode
    }, [location.state.episode])

    useEffect(() => {
        setDescription(episode.description)
    }, [episode.description])


    const handleDiscardEdit = () => {
        setDescription(episode.description)
        setEditMode(false)
    }

    const handleSave = async () => {
        try {
            const res = await editEpisode({ description, episodeId, projectId }).unwrap()
            navigate(`/project/${projectId}/episode/${episodeId}`, { state: { episode: res.data },replace:true })
            toast.success(res.message || 'updated')
            setEditMode(false)
        } catch {
            toast.error('something went wrong');
        }
    }
    return (
        <div className="p-10">
            <div className="text-xs sm:text-xl mb-8">
                <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'Project', link: `/project/${projectId}` }, { label: 'Edit', link: `/project/${projectId}/edit/${episodeId}` }]} />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between mb-2">
                <h1 className="text-primary text-2xl font-bold">Edit Description</h1>
                {
                    editMode &&
                    <div>
                        <Button varient={'danger'} size={'md'} onClick={handleDiscardEdit} >Discard</Button>
                        <Button varient={'dark'} size={'md'} onClick={handleSave}>{isLoading ? <MoonLoader size={20} color='white' /> : 'Save'}</Button>
                    </div>
                }

            </div>


            <div className="border-2 p-3 border-primary rounded-xl">
                {
                    !editMode &&
                    <Button className="bg-neutral-900/70 text-white/90  p-2 px-3 text-xs gap-1" onClick={() => setEditMode(true)}><Pencil size={15} /> <span>Edit Mode</span> </Button>
                }

                <h2 className="mt-1 font-bold text-lg text-primary ">Speaker</h2>
                <TextArea
                    disabled={!editMode}
                    className="p-0 border-0 focus:ring-0 focus-visible:ring-0 pretty-scrollbar"
                    rows={10}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </TextArea>

            </div>

        </div>
    )
}

export default EditEpisode
