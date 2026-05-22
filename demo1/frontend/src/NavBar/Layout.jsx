import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
function Layout (){
    return (
        <div className="flex h-screen w-full bg-blue-300">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <Navbar/>
                <div className="flex-1 p-4 overflow-auto">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Layout