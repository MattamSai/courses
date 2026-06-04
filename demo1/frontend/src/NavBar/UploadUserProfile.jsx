import React, { act, useEffect, useRef } from "react";
import Modal from "../utils/modal";
import { useState } from "react";
import { bindActionCreators } from "redux";
import * as mediaActions from "../redux/actions/mediaActions.js";
import { connect } from "react-redux";
import { api } from "../utils/api.js";

function UploadUserProfile({ onClick, media, actions }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [uploadProfile,setUploadProfile]=useState("")

    let showData = null;
    const profileRef = useRef();

    const onProfileUploaded = (e) => {
        const file = e.target.files[0];
        setUploadProfile(file)
    };

    const onUpdateSubmited = ()=>{
        try {
            actions.addMedia(uploadProfile)
            onClick()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        actions.getMedia()
        console.log('media',media)
    },[media.loaded])

    const mediaData = media?.data[0]
    showData = (
        <div>
            <div className="m-2">
                <div>
                    <button
                    className="border rounded-4xl bg-blue-400 cursor-pointer"
                    onClick={() => {
                        profileRef.current.click();
                    }}
                >
                    Edit
                </button>
                    <div>
                        <img
                        className="h-16 w-12"
                        src={`http://localhost:3000/${mediaData?.storageKey.replace(/\\/g, "/")}`}
                        alt="profile"
                        />
                    </div>
                </div>
                <input
                    ref={profileRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                        console.log('e',e.target)
                        onProfileUploaded(e);
                    }}
                />
            </div>
            <div className="flex gap-2 mt-8">
                <div className="mt-2">Name :</div>
                <input
                    type="text"
                    placeholder="enter user name"
                    className="border rounded p-1 text-center h-10"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <div className="mt-2">Email :</div>
                <input
                    type="email"
                    placeholder="enter user email "
                    className="border rounded p-1 text-center h-10"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                    }}
                />
            </div>
        </div>
    );

    return (
        <Modal
            title={"Update User Profile"}
            data={showData}
            actionText={"Update"}
            onClose={onClick}
            onSubmit={onUpdateSubmited}
        ></Modal>
    );
}

const mapStatetoprops = (state) => {
    return {
        media: state.getMedia,
    };
};
const mapDispatchtoprops = (dispatch) => {
    return {
        actions: bindActionCreators(mediaActions, dispatch),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(UploadUserProfile);
