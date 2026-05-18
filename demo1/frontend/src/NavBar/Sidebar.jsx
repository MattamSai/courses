import { useState } from "react"
import Profile from "./Profile"

function Sidebar() {

    const [open, setOpen] = useState(true)

    return (
        <div className="flex h-screen">

            <div className={`bg-blue-400 transition-all duration-300 ${open ? "flex gap-2 w-52" : "flex-col gap-2 w-14"}`}>

                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col gap-1 p-3"
                >
                    <div className="w-6 h-1 bg-white rounded"></div>
                    <div className="w-6 h-1 bg-white rounded"></div>
                    <div className="w-6 h-1 bg-white rounded"></div>
                </button>
                <Profile/>

            </div>

        </div>
    )
}

export default Sidebar