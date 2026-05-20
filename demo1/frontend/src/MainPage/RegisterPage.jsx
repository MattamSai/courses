import { useState } from "react"
import axios from "axios"

function UserRegister(){

    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [userPassword,setUserPassword]=useState("")

    const register = (e)=>{

        e.preventDefault()
        axios.post(`http://localhost:3000/user/register`,{
            userEmail,
            userName,
            userPassword
        }).then((data)=>{
            console.log("data",data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (

        <form
            onSubmit={register}
            className="bg-white h-1/2 w-1/3 p-8 rounded-lg shadow-md"
        >

            <div className="grid grid-cols-2 gap-4 mt-2 items-center">

                <p>UserName :</p>

                <input
                    type="text"
                    className="text-center p-2 border rounded"
                    placeholder="Enter UserName"
                    value={userName}
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}
                />

                <p>UserEmail :</p>

                <input
                    type="text"
                    className="text-center p-2 border rounded"
                    placeholder="Enter UserEmail"
                    value={userEmail}
                    onChange={(e)=>{
                        setUserEmail(e.target.value)
                    }}
                />

                <p>UserPassword :</p>

                <input
                    type="password"
                    className="text-center p-2 border rounded"
                    placeholder="Enter UserPassword"
                    value={userPassword}
                    onChange={(e)=>{
                        setUserPassword(e.target.value)
                    }}
                />

                <div className="col-span-2 flex justify-center mt-4">

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Register
                    </button>

                </div>

            </div>

        </form>
    )
}

export default UserRegister