import { useState } from "react"

function UserRegister(){

    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [userPassword,setUserPassword]=useState("")

    const register = ()=>{

    }
    return (
    <form>
        <div>
            <input type="text" placeholder="enter username" value={userName} onChange={(e)=>{e.target.value}}></input>
            <input type="text" placeholder="enter useremail" value={userEmail} onChange={(e)=>{e.target.value}}></input>
            <input type="text" placeholder="enter userpassword" value={userPassword} onChange={(e)=>{e.target.value}}></input>
            <input type="button" onClick={register}>Register</input>
        </div>
    </form>
    )
}
export default UserRegister