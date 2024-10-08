import { ChevronLeft, Settings } from "lucide-react"
import Button from "./ui/Button"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function SideBar({ expanded,closeSidebar }: { expanded: boolean,closeSidebar:()=>void }) {
    const [selected, setSelected] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const loc = location.pathname.split('/')[3] ||''

    useEffect(()=>{
        switch(loc){
            case 'widget-config':setSelected('widget-config');
                                    break;
            case 'account':setSelected('account')
                        break;
            default: setSelected('')
        }
    },[loc])
    
    return (
        <div className={`h-screen bg-purple-100 flex flex-col  sm:rounded-r-2xl transition-all duration-400  overflow-hidden ${expanded ? 'w-full  sm:w-96 px-5 ' : 'w-0'}`}>
           
            
            <div className="flex justify-between items-center mb-5 mt-5 ">
                <img width={'150px'} src="/logo.png" alt="" />
                <Button className="inline-block sm:hidden" onClick={closeSidebar}><ChevronLeft color="#111" /></Button>
                
            </div>
          
                <div className="flex-1">
                    
                    <div className="border-b border-black/20">
                   
                    
                    <SideBarItem {...{ name: "project", link: "", count: 2,selected }} />
                    <SideBarItem {...{ name: "Widget Configurations", link: "widget-config", count: 3,selected }} />
                   
                    </div>
                    



                </div>
                <div className="border-t py-2 border-black/30 ">
                    <Button onClick={()=>navigate('account')} className={`text-neutral-900/ w-full justify-start p-1 ${selected==='account' && 'bg-primary text-white'}`}>
                        <span className="bg-neutral-300/60  p-2 rounded-full">
                            <Settings size={20} />
                        </span>
                        <span className="ml-2 ">Settings</span>
                    </Button>

                </div>
            


        </div>
    )
}

const SideBarItem = ({ name, link, count,selected }: { name: string, link: string, count: number, selected:string }) => {
    const navigate = useNavigate()
    
    
    
 
   
    
    return (
        <div className={`transition-colors duration-200 rounded-full flex mb-2 gap-2  p-2.5 text-black/80 font-semibold text-sm cursor-pointer ${ selected===link&&'bg-purple-700 text-white'}`} onClick={() => navigate(link)}>
            <span className="flex items-center justify-center h-6 w-6 text-xs rounded-full bg-neutral-300 text-black/80">{count}</span>
            {name}
        </div>
    )
}

export default SideBar
