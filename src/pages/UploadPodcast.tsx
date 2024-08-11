
import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import Table from "../components/ui/Table"
import { useNavigate, useParams } from "react-router-dom"
import { uploadOptions } from "../datas/datas"
import Modal from "../components/ui/Modal"
import { useEffect, useState } from "react"
import UploadEpisode from "../components/UploadEpisode"
import { IUploadOptions } from "../types/data"
import { useGetEpisodesQuery } from "../redux/feature/userApiSlice"
import PaginationButtons from "../components/ui/PaginationButton"


function UploadPodcase() {
  const { projectId } = useParams();
  const [uploadOpt, setUploadOpt] = useState<IUploadOptions | null>(null)
  const [page, setPage]= useState(1)

  const { data } = useGetEpisodesQuery({ page, projectId: projectId || '' });
  const navigate = useNavigate()

  useEffect(() => {
    if (!projectId) {
      navigate('/')
    }
  }, [navigate, projectId])

  const showActionButtons = () => {
    return (
      <div className="  ">
        <button className="border-r p-2 border rounded-l hover:bg-neutral-50">Edit</button>
        <button className="text-red-500 p-2 border rounded-r hover:bg-neutral-50">Delete</button>
      </div>
    )
  }


  return (
    <>
      <div className="p-10 ">
        <div className="text-xl mb-8">
          <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'upload', link: location.pathname }]} />
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
          <Table
            {...{
              columns: [{ Header: "Name", accessor: 'name' }, { Header: "Upload Date & Time", accessor: "updatedAt" }, { Header: "method", accessor: 'method' }, { Header: "Actions", accessor: 'name', Cell: showActionButtons }],
              data: data?.data?.items || [],

            }}
          />
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
    </>
  )
}

export default UploadPodcase
