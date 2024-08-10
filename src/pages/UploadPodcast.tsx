
import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import Table from "../components/ui/Table"


function UploadPodcase() {
  const showActionButtons =()=>{
    return (
      <div className="  ">
        <button className="border-r p-2 border rounded-l hover:bg-neutral-50">Edit</button>
        <button className="text-red-500 p-2 border rounded-r hover:bg-neutral-50">Delete</button>
      </div>
    )
  }
  return (
    <div className="p-10 ">
      <div className="text-xl mb-8">
        <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'upload', link: '/project/fds/upload' }]} />
      </div>

      <div className="flex flex-wrap gap-x-2 md:gap-x-10 mb-8 ">
        {
          ["/src/assets/icons/rss.png", "/src/assets/icons/spotify.png", "/src/assets/icons/youtube.png"].map(item => (
            <div className="w-44 sm:w-52 border border-black/20 p-2 sm:p-3 shadow-lg rounded-xl flex items-center gap-2 mb-2">
              <div className="items-center flex justify-center w-10 md:w-20">
                <img src={item}  width={50} height={50} alt="" />
              </div>

              <div className="font-semibold text-sm sm:text-base" ><span>Upload Youtube Video</span></div>

            </div>
          ))
        }

      </div>

        <div className="w-full ">
          <Table
          {...{
            columns:[{Header:"Name",accessor:'name'},{Header:"Upload Date & Time", accessor:"upload_date"},{Header:"Status", accessor:'status'},{Header:"Actions",accessor:'name',Cell:showActionButtons}],
            data:[{name:'krishnadas',status:"sucess",upload_date:'2024/05/02'},{name:'krishnadas',status:"sucess",upload_date:'2024/05/02'}],

          }}
          />
        </div>


    </div>
  )
}

export default UploadPodcase
