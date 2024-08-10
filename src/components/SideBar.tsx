import { Settings } from "lucide-react"
import Button from "./ui/Button"
import { useLocation, useNavigate } from "react-router-dom"

function SideBar({ expanded }: { expanded: boolean }) {
    
    return (
        <div className={`h-screen bg-purple-100 flex flex-col  sm:rounded-r-2xl transition-all duration-400  overflow-hidden ${expanded ? 'w-full  sm:w-96 px-5 ' : 'w-0'}`}>
            <div className="flex items-center mb-5 mt-5 ">
                <img className="w-10 " src="/src/assets/logo.png" alt="" />
                <img className="h-6 ml-1" src="/src/assets/LAMA.png" alt="" />
            </div>
          
                <div className="flex-1">
                    
                    <div className="border-b border-black/20">
                   
                    
                    <SideBarItem {...{ name: "project", link: "upload", count: 2 }} />
                    <SideBarItem {...{ name: "Widget Configurations", link: "widget-config", count: 3 }} />
                   
                    </div>
                    



                </div>
                <div className="border-t py-2 border-black/30 ">
                    <Button>
                        <span className="bg-neutral-300/60 text-neutral-900/50 p-2 rounded-full">
                            <Settings size={20} />
                        </span>
                        <span className="ml-2 text-black/80">Settings</span>
                    </Button>

                </div>
            


        </div>
    )
}

const SideBarItem = ({ name, link, count }: { name: string, link: string, count: number }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const selected = location.pathname.split('/')[3]

    
 
   
    
    return (
        <div className={`transition-colors duration-200 rounded-full flex mb-2 gap-2  p-2.5 text-black/80 font-semibold text-sm cursor-pointer ${ selected===link&&'bg-purple-700 '}`} onClick={() => navigate(link)}>
            <span className="flex items-center justify-center h-6 w-6 text-xs rounded-full bg-neutral-300 text-black/80">{count}</span>
            {name}
        </div>
    )
}

export default SideBar
