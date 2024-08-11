
import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import Table from "../components/ui/Table"
import { useLocation } from "react-router-dom"
import { uploadOptions } from "../datas/datas"
import Modal from "../components/ui/Modal"
import { useState } from "react"
import UploadEpisode from "../components/UploadEpisode"


function UploadPodcase() {
  const location = useLocation()
  const [uploadOpt, setUploadOpt] = useState<{icon:string, title:string}|null>(null)

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
              className="w-44 sm:w-52 border border-black/20 p-2 sm:p-3 shadow-lg rounded-xl flex items-center gap-2 mb-2 cursor-pointer"
              onClick={()=>setUploadOpt(item)}
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
              columns: [{ Header: "Name", accessor: 'name' }, { Header: "Upload Date & Time", accessor: "upload_date" }, { Header: "Status", accessor: 'status' }, { Header: "Actions", accessor: 'name', Cell: showActionButtons }],
              data: [{ name: 'krishnadas', status: "sucess", upload_date: '2024/05/02' }, { name: 'krishnadas', status: "sucess", upload_date: '2024/05/02' }],

            }}
          />
        </div>


      </div>
      { uploadOpt &&
        <Modal>
         <UploadEpisode {...uploadOpt} closeModal={()=>setUploadOpt(null)} />
        </Modal>
      }
    </>
  )
}

export default UploadPodcase
