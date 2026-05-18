import { useRef, useState } from "react"

function Searchbox ({data}){
    const [input,setInput]=useState()
    let timeOut = useRef()
    return(
        <div className="flex bg-white border-0.5 h-1/3 mt-6">
            <input 
            type="search"
            className="p-2"
            onChange={(e)=>{
                clearTimeout(timeOut.current)
                timeOut.current = setTimeout(()=>{
                },500)
            }}
            placeholder='Enter your Search'
            >
            </input>
        </div>
    )
}
export default Searchbox