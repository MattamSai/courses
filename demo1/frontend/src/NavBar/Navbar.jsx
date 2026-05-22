import { useState } from "react"
import Searchbox from "./Searchbox"
import Logout from "../MainPage/LogoutPage"
import Home from "../MainPage/Home"
import { NavLink } from "react-router-dom"

function Navbar () {

    const [data,setData]=useState()
    return(
        <div className="flex w-full h-24 bg-blue-400">
            <div className="flex justify-around w-2/3 mt-6">
                <NavLink to={'/home'} className={({isActive})=>isActive? 'text-white':'text-black'}> Home </NavLink>
                <NavLink to={'/course'} className={({isActive})=>isActive ? 'text-white' : 'text-black'}> Course </NavLink>
                <NavLink to={'/history'} className={({isActive})=> isActive ? 'text-white' : 'text-black'}> History </NavLink>
            </div>
            <div className=" flex w-full justify-between">
                <Searchbox data={data}/>
                <Logout/>
            </div>
            
        </div>
    )
}
export default Navbar