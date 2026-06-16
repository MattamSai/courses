import React, { act, useEffect, useRef } from "react";
import Modal from "../utils/modal";
import { useState } from "react";
import { bindActionCreators } from "redux";
import * as mediaActions from "../redux/actions/mediaActions.js";
import * as userActions from "../redux/actions/userActions.js";
import { connect } from "react-redux";
import { api } from "../utils/api.js";

function UploadUserProfile({ onClick, media, user, actions }) {
    const [userName, setUserName] = useState(user.data.userName);
    const [userEmail, setUserEmail] = useState(user.data.userEmail);
    const [uploadProfile, setUploadProfile] = useState("");

    let showData = null;
    const profileRef = useRef();

    const onProfileUploaded = (e) => {
        const file = e.target.files[0];
        setUploadProfile(file);
    };

    const onUpdateSubmited = () => {
        try {
            actions.addMedia(uploadProfile);
            onClick();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        actions.getMedia();
        actions.getUser();
        console.log("media", media);
    }, []);

    const mediaData = media?.data[0];
    showData = (
        <div>
            <div className="m-2">
                <div>
                    <div
                        className="relative w-12 h-12 cursor-pointer group"
                        onClick={() => profileRef.current?.click()}
                    >
                        <img
                            className="w-12 h-12 rounded-full object-cover cursor-pointer"
                            src={
                                mediaData?.storageKey
                                    ? `http://localhost:3000/${mediaData.storageKey.replace(/\\/g, "/")}`
                                    : "/src/assets/profileDefault.jpg"
                            }
                            alt="profile"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                    "/src/assets/profileDefault.jpg";
                            }}
                        />

                        <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-sm">✏️</span>
                        </div>
                    </div>
                </div>
                <input
                    ref={profileRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                        console.log("e", e.target);
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
        user: state.getUser,
    };
};
const mapDispatchtoprops = (dispatch) => {
    return {
        actions: bindActionCreators(
            { ...mediaActions, ...userActions },
            dispatch,
        ),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(UploadUserProfile);
