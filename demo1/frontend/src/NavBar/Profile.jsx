import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import UploadUserProfile from "./UploadUserProfile.jsx";
import * as mediaActions from "../redux/actions/mediaActions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Profile({ media, actions }) {
    const [data, setData] = useState("");
    const [clickUpload, setClickUpload] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(`/user/getProfile`);
                if (response.data.success) {
                    setData(response.data.data);
                }
            } catch (error) {
                setData("unable to get data");
            }
        };
        fetchProfile();
    }, []);

    useEffect(() => {
        actions.getMedia();
    }, []);

    console.log("media", media);

    const mediaData = media?.data?.data?.[0];

    let userData = (
        <div className="flex gap-3 mt-4">
            {mediaData && <img
                className="w-12 h-12 rounded-full object-cover"
                src={`http://localhost:3000/${mediaData.storageKey.replace(/\\/g, "/")}`}
                alt="profile"
            />}

            <span>{data.userEmail}</span>

            <button
                onClick={() => setClickUpload(true)}
                className="cursor-pointer"
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
    return {
        media: state.getMedia,
    };
};

const mapDispatchtoprops = (dispatch) => {
    return {
        actions: bindActionCreators(mediaActions, dispatch),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Profile);
