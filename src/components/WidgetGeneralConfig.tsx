import Button from "./ui/Button"
import { Input } from "./ui/Input"

function WidgetGeneralConfig() {
    return (
        <form className="text-black/80">
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="name">Chatbot Name</label>
                <Input className="mt-2" id="name" />
                <span className="text-black/50 text-xs">Enter chatbot name</span>
            </div>
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="welcome-message">Welcome Message</label>
                <Input className="mt-2" id="welcome-message" />
                <span className="text-black/50 text-xs">Enter Welcome Message</span>
            </div>
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="input-placeholder">Input Placeholder</label>
                <Input className="mt-2" id="input-placeholder" />
                <span className="text-black/50 text-xs">Enter Input Placeholder</span>
            </div>

            <div className="flex justify-end">
                <Button  varient={'primary'} size={'md'}>Save</Button>
            </div>

        </form>
    )
}

export default WidgetGeneralConfig
