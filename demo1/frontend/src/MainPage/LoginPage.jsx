import { useState } from "react";
import { api } from "../utils/api.js";
import UserRegister from "./RegisterPage.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";

function UserLogin() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error,setError]=useState("")
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const response = await api.post('/user/login',{
            userEmail,
            userPassword
        })
        console.log("response",response)
        if(!response.data.success){
            setError("User details not found")
            return
        }
        navigate('/home')
    };
    return (
        <form onSubmit={login}
        className="bg-white h-1/3 w-1/4 p-8 rounded-lg shadow-md"
        >
            <div className="grid grid-cols-1 gap-4 mt-2 items-center">
                <input
                    type="text"
                    placeholder="enter useremail"
                    className="border rounded p-2 text-center"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    className="border rounded p-2 text-center"
                    placeholder="enter userpassword"
                    value={userPassword}
                    onChange={(e) => {
                        setUserPassword(e.target.value);
                    }}
                />
                <button type="submit"
                className="bg-blue-400 text-white px-4 py-2 rounded"
                >Login</button>
                <NavLink to="/register">Create account</NavLink>
            </div>
        </form>
    );
}
export default UserLogin;
