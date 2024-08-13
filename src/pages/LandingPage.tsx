import { House } from "lucide-react"
import Button from "../components/ui/Button"
import CreateNewProject from "../components/CreateNewProject"
import Navbar from "../components/layout/Navbar"
import { useGetProjectsQuery } from "../redux/feature/userApiSlice"
import { Fragment, useEffect, useState } from "react"
import { IProject } from "../types/data"
import PaginationButtons from "../components/ui/PaginationButton"
import ProjectCard from "../components/ProjectCard"
import SkeletonCard from "../components/Skeleton/SkeletonCard"

const colorClasses = ['bg-yellow-500', 'bg-purple-500', 'bg-blue-600', 'bg-green-600','bg-yellow-500', 'bg-purple-500', 'bg-blue-600', 'bg-green-600','bg-yellow-500']

function LandingPage() {
  
    const [page, setPage] = useState(1)
    const [projects, setProjects] = useState<IProject[]>([])
  



    

    const { data,refetch,isLoading } = useGetProjectsQuery({page})

    useEffect(()=>{
       
        setProjects(data?.data?.items||[])
    },[data?.data?.lastPage, data?.data?.items, page])

    return (
        <>

            <Navbar />
            <div className="container w-[85vw] mx-auto">
                <div className="sm:p-5">
                    <div className="mb-5">

                        <Button varient={'secondary'} size={"sm"} ><House size={20} /> <span className="ml-1">Back to Home</span></Button>
                    </div>
                   
                    {
                       !isLoading && projects.length === 0 ?
                            <div className="flex flex-col justify-center items-center ">
                                <h1 className="text-primary mb-5 font-bold text-2xl text-center md:text-5xl">Create a New Project</h1>
                                <img className="mb-5" width={350} src="/landingPage.png" alt="" />
                                <p className="max-w-3xl text-center mb-3 text-black/50 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                                <CreateNewProject {...{refetch}} />
                            </div>
                            :
                            <div>
                                <div className="flex flex-col sm:flex-row gap-2 justify-between  mb-5">
                                    <h1 className="text-primary text-4xl font-bold">Projects</h1>
                                    <CreateNewProject {...{refetch}} />
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
                                    {
                                        !isLoading?
                                        Array.from({ length: 6 }, (_, index) => (
                                            <SkeletonCard key={index} className="mb-4" />
                                          ))
                                        
                                        :
                                        projects.map((project, i) => (<Fragment key={project.id}><ProjectCard {...{project,colorClass:colorClasses[i]}} /></Fragment>))
                                    }
                                </div>


                            </div>
                    }
                    {
                        (data?.data?.totalPages||0) >1  &&
                        <PaginationButtons
                        totalPages={data?.data?.totalPages||0}
                        currentPage={page}
                        setCurrentPage={setPage}
                        />
                    }

                </div>
            </div>
        </>
    )
}

export default LandingPage
