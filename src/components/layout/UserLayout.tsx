import { Navigate, Outlet, useLocation } from "react-router-dom"
import { RootState } from "../../redux/store"
import Modal from "../ui/Modal"
import Login from "../Login"
import { useSelector } from "react-redux"

function UserLayout() {
  const { isAuth } = useSelector((state: RootState) => state.user)
  const location = useLocation()
  return (
    <>
    
      {isAuth || location.pathname =='/'? <Outlet />: <Navigate to='/' />}
    
      {
        !isAuth &&
        <Modal >
          <Login />
        </Modal>
      }

    </>
  )
}

export default UserLayout
