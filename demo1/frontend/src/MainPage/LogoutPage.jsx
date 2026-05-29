import { useNavigate } from "react-router-dom"
import { api } from "../utils/api.js"

function Logout (){
    const navigate=useNavigate()
    const logout = async()=>{
        try {
            const response = await api.post(`/user/logout`)
        if(response.data.success){
            navigate('/login')
        }
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <div className="m-8">
            <button className="bg-red-500 w-14 h-8 border rounded-2xl" onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout