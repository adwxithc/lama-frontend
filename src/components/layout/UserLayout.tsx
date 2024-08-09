import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function UserLayout() {
  return (
    <div className="">
        <Navbar />
        <div className="container w-[85vw] mx-auto">
        <Outlet />
        </div>
        
    </div>
  )
}

export default UserLayout
