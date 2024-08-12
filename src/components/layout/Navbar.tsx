import { Bell, Settings } from "lucide-react"

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-10 p-5 sticky top-0 bg-white">
        <div className="flex items-center gap-2 ">
            <img src="/logo.png" width="150px" alt="LAMA" />
      
        </div>
        <div className="flex items-center gap-3">
       
       <span className="cursor-pointer">
       <Settings size={30} />
       </span>
        <span className="cursor-pointer">
        <Bell  size={30} />
        </span>
        
        </div>
      
    </div>
  )
}

export default Navbar
