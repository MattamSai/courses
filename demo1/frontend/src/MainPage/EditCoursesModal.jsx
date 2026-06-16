import React, { act, useEffect, useState } from "react";
import Modal from "../utils/modal";
import * as connectionActions from "../redux/actions/coursesAction.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { data } from "react-router-dom";
import { Loader } from "lucide-react";

function EditCoursesModal({ data, onClose, courses, actions }) {
    console.log("action", actions);
    console.log("course", courses);
    let selectedCourse = null;
    console.log("connectionActions", connectionActions);

    const [name, setName] = useState(data.courseName);
    const [courseData, setCourseData] = useState(data.data);
    const [onSubmit,setOnSubmit]=useState(false)
    const  courseId = data.id

    let sendData = {}

    console.log("componet rendered");
    useEffect(() => {
        console.log("component mounted");
        actions.getCourses();
    }, [courses.loaded]);


    
    const onSubmitClicked = async () => {
        sendData={
            id:courseId,
            courseName:name,
            data:courseData
        }
        actions.updateCourse(sendData)
        onClose()
    };

    if(courses.loading){
        selectedCourse=(
            <Loader/>
        )
    }

    if(courses.loaded){
        selectedCourse = (
        <div className="">
            <div className="flex justify-around">
                <div className="px-4 py-3 mt-2">Name :</div>
                <input
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex justify-around mt-2">
                <div className="px-4 py-3 mt-2">Data :</div>
                <textarea
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 mt-2 min-h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={courseData}
                    onChange={(e) => setCourseData(e.target.value)}
                />
            </div>
        </div>
    );
    }

    return (
        <div>
            <Modal
                data={selectedCourse}
                onClose={onClose}
                actionText={"Update"}
                onSubmit={onSubmitClicked}
            ></Modal>
        </div>
    );
}

const mapStatetoprops = (state) => {
    console.log("state", state);
    return {
        courses: state.getCourse,
    };
};

const mapDispatchtoprops = (dispatch) => {
    console.log("dispatch", dispatch);
    return {
        actions: bindActionCreators(connectionActions, dispatch),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(EditCoursesModal);
