import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
function Profile() {
    const [data, setData] = useState("");
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(`/user/getProfile`);
                if (response.data.success) {
                    setData(response.data.data);
                }
            } catch (error) {
                setData("unable to get data")
            }
        };
        fetchProfile()
    }, []);

    let userData = (
        <div className="flex mt-4">
            <span className="text-white">{data.userEmail}</span>
        </div>
    )
    return (
        <div className="flex h-screen w-full bg-blend-overlay ">
            <h5>{userData}</h5>
        </div>
    );
}
export default Profile;
