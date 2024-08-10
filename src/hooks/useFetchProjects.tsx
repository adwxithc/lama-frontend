import { useCallback, useEffect, useRef, useState } from "react"
import { useGetProjectsQuery } from "../redux/feature/useApiSlice"


function useFetchProjects() {
    const [hasMore, setHasMore]  = useState(false)
    const [page, setPage] = useState(1)

    const { data, isLoading } = useGetProjectsQuery({page})
    console.log(data);
    
    useEffect(()=>{
        setHasMore((data?.data?.lastPage||0)>page)
    },[data?.data?.lastPage, page])

    const observer = useRef<IntersectionObserver | null>(null)

    const lastProjectRef = useCallback((node: HTMLDivElement | null) => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {

            if (entries[0].isIntersecting && hasMore ) {
                setPage(prev => prev + 1)
            }

        })
        if (node) observer.current.observe(node)


    }, [isLoading, hasMore, setPage])
  return {
    lastProjectRef,
    data
  }
}

export default useFetchProjects
