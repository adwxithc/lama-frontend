import { useState } from "react"
import ColorInput from "./ui/ColorInput"
import { Input } from "./ui/Input"
import ToggleButton from "./ui/ToggleButton"
import DropDown from "./ui/DropDown"
import Button from "./ui/Button"
import { Upload } from "lucide-react"
import { Avatar } from "./ui/Avatar"

const iconSizeOptions = [{ label: 'Small (48 x 48 px)', val: '48' }, { label: 'Medium (64 x 64 px)', val: '64' }, { label: 'Large (96 x 96 px)', val: '96' }]
const iconPositions = [
    { label: 'Top Left', val: 'top-left' },
    { label: 'Top Right', val: 'top-right' },
    { label: 'Bottom Left', val: 'bottom-left' },
    { label: 'Bottom Right', val: 'bottom-right' },
    { label: 'Center', val: 'center' },
    { label: 'Top Center', val: 'top-center' },
    { label: 'Bottom Center', val: 'bottom-center' },
    { label: 'Left Center', val: 'left-center' },
    { label: 'Right Center', val: 'right-center' },
  ];

function WidgetDisplayConfig() {
    const [toggle, setToggle] = useState(false)
    return (
        <form className="text-black/80 p-3">
            <div className="grid  gap-y-4 gap-x-16 md:grid-cols-2 font-bold text-sm mb-5">
                <div>
                    <label htmlFor="primary-color"  >Primary Color</label>
                    <ColorInput className="mt-2" id="primary-color" />
                </div>
                <div>
                    <label htmlFor="font-color">Font Color</label>
                    <ColorInput className="mt-2" id="font-color" />


                </div>
                <div>
                    <label htmlFor="font-size">Font Size (in px)</label>
                    <Input className="mt-2" id="font-size" />

                </div>
                <div>
                    <label htmlFor="font-size">Chat Height (in % of total screen)</label>
                    <Input className="mt-2" id="font-size" />

                </div>
            </div>
            <div className="flex justify-between border-b-2 pb-8 mb-5">
                <div>
                    <span className="block font-bold ">Show Sources</span>
                    <span className="text-xs">Show sources of the widget</span>
                </div>
                <div>
                    <ToggleButton value={toggle} toggle={() => setToggle(p => !p)} />
                </div>

            </div>

            <div className="mb-3">
                <h3 className=" font-bold text-primary mb-5">Chat Icon</h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                    <div>
                        <label className="font-bold" htmlFor="chat-icon-size">Chat Icon Size</label>
                        <DropDown className="mt-2" id="chat-icon-size" options={iconSizeOptions} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="chat-icon-size">Position On Screen</label>
                        <DropDown className="mt-2" id="chat-icon-size" options={iconPositions} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="distance-bottom">Distance from Bottom (in px)</label>
                        <Input id="distance-bottom" />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="distance-horizontal">Horizontal Distance (in px)</label>
                        <Input id="distance-horizontal" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar src='' />
                        <input type="file" id="icon" className="hidden" />
                        <label htmlFor="icon" className="flex gap-2 p-2 px-3 bg-primary cursor-pointer rounded text-white items-center">Upload Image <Upload size={20} /></label>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button varient={'primary'} size={'md'} >Save</Button>
            </div>
        </form>
    )
}

export default WidgetDisplayConfig
