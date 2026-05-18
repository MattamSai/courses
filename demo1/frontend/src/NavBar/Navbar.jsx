import { useState } from "react"
import Searchbox from "./Searchbox"

function Navbar () {

    const [data,setData]=useState()
    return(
        <div className="flex w-full h-24 bg-blue-400">
            <div className="flex justify-around w-2/3 mt-6">
                <div className="text-white">Home</div>
                <div className="text-white">Course</div>
                <div className="text-white">History</div>
            </div>
            <Searchbox data={data}/>
        </div>
    )
}
export default Navbar