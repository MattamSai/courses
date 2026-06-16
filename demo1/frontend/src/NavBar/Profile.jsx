import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import UploadUserProfile from "./UploadUserProfile.jsx";
import * as mediaActions from "../redux/actions/mediaActions.js";
import * as userActions from "../redux/actions/userActions.js"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Profile({ media, user, actions }) {
    const [data, setData] = useState("");
    const [clickUpload, setClickUpload] = useState(false);

    console.log('action',actions)
    useEffect(() => {
        actions.getUser()
        actions.getMedia();
    }, []);

    console.log('user',user);
    console.log("media", media);

    const mediaData = media?.data?.data?.[0];

    let userData = (
        <div className="flex gap-3 mt-4 items-start">
            <img
                className="w-12 h-12 rounded-full object-cover"
                src={mediaData?.storageKey ? `http://localhost:3000/${mediaData.storageKey.replace(/\\/g, "/")}` : `/src/assets/profileDefault.jpg`}
                alt="profile"
                onError={(e)=>{
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/src/assets/profileDefault.jpg'
                }}
            />

            <span className="text-white mt-1">{user?.data?.userEmail}</span>

            <button
                onClick={() => setClickUpload(true)}
                className="cursor-pointer text-white "
            >
                +
            </button>
        </div>
    );

    console.log("userData", userData);
    console.log("data", data);
    console.log("clickUpload", clickUpload);
    console.log("mediaData", mediaData);

    console.log("mediaData", mediaData);
    console.log(
        "image url",
        mediaData
            ? `http://localhost:3000/${mediaData.storageKey.replace(/\\/g, "/")}`
            : "no media",
    );

    return (
        <div className="flex h-screen w-full bg-blend-overlay ">
            {userData}
            {clickUpload && (
                <UploadUserProfile
                    onClick={() => {
                        setClickUpload(false);
                    }}
                />
            )}
        </div>
    );
}

const mapStatetoprops = (state) => {
    console.log('sa',state)
    return {
        media: state.getMedia,
        user:state.getUser
    };
};

const mapDispatchtoprops = (dispatch) => {
    return {
        actions: bindActionCreators({...mediaActions,...userActions}, dispatch),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Profile);
