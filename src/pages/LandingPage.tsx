import { House, Plus } from "lucide-react"
import Button from "../components/ui/Button"
import CreateNewProject from "../components/CreateNewProject"

function LandingPage() {
    return (
        <>

            <div className="sm:p-5">
                <div className="mb-5">

                    <Button varient={'secondary'} size={"sm"} ><House size={20} /> <span className="ml-1">Back to Home</span></Button>
                </div>
                {
                    false ?
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-primary mb-5 font-bold text-2xl text-center md:text-5xl">Create a New Project</h1>
                            <img className="mb-5" width={300} src="/src/assets/landingPage.png" alt="" />
                            <p className="max-w-3xl text-center mb-3 text-black/50 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                            <CreateNewProject />
                        </div>
                        :
                        <div>
                            <div className="flex flex-col sm:flex-row gap-2 justify-between  mb-5">
                                <h1 className="text-primary text-4xl font-bold">Projects</h1>
                                <CreateNewProject />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
                                {
                                    [1,2,3,4,5,6,7,8,9].map(item=>(
                                        <div className="rounded-2xl border border-black/30 shadow-xl h-32 p-2  flex" key={item}>
                                            <div className="aspect-square h-full bg-yellow-500 rounded-xl flex justify-center items-center">
                                                <span className="text-3xl md:text-6xl font-bold text-white">SP</span>
                                                
                                            </div>
                                            <div className="px-3 ">
                                                <h4 className="capitalize text-primary font-bold">Sample project</h4>
                                                <p className="text-sm text-black/80">4 Episodes</p>
                                                <span className="text-xs text-black/40">Last edited a week ago</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                }


            </div>

        </>
    )
}

export default LandingPage
