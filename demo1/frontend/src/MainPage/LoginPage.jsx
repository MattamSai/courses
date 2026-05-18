import { useState } from "react"

function UserLogin(){
    
    const [userName,setUserName]=useState("")
    const [userPassword,setUserPassword]=useState("")

    const login = ()=>{

    }
    return (
    <form>
        <div>
            <input type="text" placeholder="enter username" value={userName} onChange={(e)=>{e.target.value}}></input>
            <input type="text" placeholder="enter userpassword" value={userPassword} onChange={(e)=>{e.target.value}}></input>
            <input type="button" onClick={login}>Login</input>
        </div>
    </form>
    )
}
export default UserLogin