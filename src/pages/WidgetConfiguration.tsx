import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import { useParams } from "react-router-dom"
import TabMenu from "../components/ui/TabMenu"
import WidgetGeneralConfig from "../components/WidgetGeneralConfig"
import WidgetDisplayConfig from "../components/WidgetDisplayConfig"
import { useMemo } from "react"



function WidgetConfiguration() {
    const tabs =useMemo(()=>{
        return[
            {
                id:1,
                label:'General',
                content:<WidgetGeneralConfig />
            },
            {
                id:2,
                label:'Display',
                content:<WidgetDisplayConfig />
            }
        ]
    },[])
    const { projectId = '', episodeId = '' } = useParams()
  return (
    <div className="p-10">
       <div className="text-xl mb-8">
          <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'Project', link:`/project/${projectId}` },{label:'Widget configuration', link:`/project/${projectId}/widget-config`}]} />
        </div>
        <h1 className="text-primary text-2xl font-bold">Configuration</h1>
        <TabMenu
        tabs={tabs}
         />
         
    </div>
  )
}

export default WidgetConfiguration
