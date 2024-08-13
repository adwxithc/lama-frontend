
import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import Table from "../components/ui/Table"
import { useNavigate, useParams } from "react-router-dom"
import { uploadOptions } from "../datas/datas"
import Modal from "../components/ui/Modal"
import { useEffect, useState } from "react"
import UploadEpisode from "../components/UploadEpisode"
import { IEpisode, IUploadOptions } from "../types/data"
import { useGetEpisodesQuery } from "../redux/feature/userApiSlice"
import PaginationButtons from "../components/ui/PaginationButton"
import DeleteEpisode from "../components/DeleteEpisode"


function UploadPodcast() {
  const { projectId } = useParams();
  const [uploadOpt, setUploadOpt] = useState<IUploadOptions | null>(null)
  const [page, setPage] = useState(1)
  const [deleteEpisode, setDeleteEpisode] = useState<IEpisode | null>(null)

  const { data, isLoading } = useGetEpisodesQuery({ page, projectId: projectId || '' });

  const navigate = useNavigate()


  useEffect(() => {
    if (!projectId) {
      navigate('/')
    }
  }, [navigate, projectId])

  const showActionButtons = (episode: IEpisode) => {
    return (
      <div className="  ">
        <button onClick={() => navigate(`episode/${episode.id}`, { state: { episode } })} className="border-r p-2 border rounded-l hover:bg-neutral-50">Edit</button>
        <button onClick={() => setDeleteEpisode(episode)} className="text-red-500 p-2 border rounded-r hover:bg-neutral-50">Delete</button>
      </div>
    )
  }


  return (
    <>
      <div className="p-10 ">
        <div className="text-xs sm:text-xl mb-8">
          <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'Project', link: location.pathname }]} />
        </div>

        <div className="flex flex-wrap gap-x-1 md:gap-x-10 mb-8 ">
          {
            uploadOptions.map(item => (
              <div
                key={item.method}
                className="w-44 sm:w-52 border border-black/20 p-2 sm:p-3 shadow-lg rounded-xl flex items-center gap-2 mb-2 cursor-pointer"
                onClick={() => setUploadOpt(item)}
              >
                <div className="items-center flex justify-center w-10 md:w-20">
                  <img src={item.icon} width={50} height={50} alt="" />
                </div>

                <div className="font-semibold text-sm sm:text-base capitalize" ><span>{item.title}</span></div>

              </div>
            ))
          }

        </div>

        <div className="bg-primary p-3 capitalize text-white font-semibold text-xl rounded-lg mb-5">
          uploaded episodes
        </div>

        <div className="w-full ">
          {
            isLoading || data?.data?.items?.length || 0 > 0 ?
              <Table
                {...{
                  isLoading,
                  columns: [{ Header: "Name", accessor: 'name' }, { Header: "Upload Date & Time", accessor: "updatedAt" }, { Header: "method", accessor: 'method' }, { Header: "Actions", accessor: 'name', Cell: showActionButtons }],
                  data: data?.data?.items || [],

                }}
              />
              :
              <div className="border-2 border-primary border-dashed p-5 rounded-xl">
                <h2 className="text-xl font-semibold text-primary text-center">Please add Episodes</h2>
              </div>
          }

          {
            (data?.data?.totalPages || 0) > 1 &&
            <PaginationButtons
              totalPages={data?.data?.totalPages || 0}
              currentPage={page}
              setCurrentPage={setPage}
            />
          }
        </div>
      </div>
      {uploadOpt &&
        <Modal>
          <UploadEpisode {...uploadOpt} closeModal={() => setUploadOpt(null)} />
        </Modal>
      }
      {
        deleteEpisode &&
        <Modal className="max-w-md ">
          <DeleteEpisode {...{ closeModal: () => setDeleteEpisode(null), episode: deleteEpisode }} />
        </Modal>
      }
    </>
  )
}

export default UploadPodcast
