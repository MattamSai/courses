import { act, useEffect, useState } from "react";
import * as connectActions from "../redux/actions/coursesAction.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import EditCoursesModal from "./EditCoursesModal.jsx";
import DeleteCoursesModal from "./DeleteCoursesModal.jsx";

function Courses({ courses, actions }) {
    const [name, setName] = useState("");
    const [data, setData] = useState("");
    const [sendId, setSendId] = useState("");
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    let courseData = null;
    useEffect(() => {
        actions.getCourses();
    }, []);

    const editModal = (id) => {
        setSendId(id);
        setOpenEdit(true);
    };

    const deleteModal = (id) => {
        setSendId(id);
        setOpenDelete(true);
    };

    courseData = (
        <div className="p-2 m-2">
            <div className="text-bold">List of all the Available Courses</div>
            <div className="flex gap-2 mt-4">
                <div>S.NO</div>
                <div>Course Name</div>
            </div>
            {courses.data.map((data) => {
                if (data.id == Number(id)) {
                    return (
                        <div className="flex justify-between gap-12 p-2">
                            {openEdit && (
                                <div>
                                    <EditCoursesModal
                                        data={data}
                                        onClose={() => {
                                            setOpenEdit(false);
                                        }}
                                    />
                                </div>
                            )}
                            {openDelete && (
                                <div>
                                    <DeleteCoursesModal
                                        data={data}
                                        onClose={() => {
                                            setOpenDelete(false);
                                        }}
                                    />
                                </div>
                            )}
                            <div className="flex gap-12">
                                <div>{data.id} </div>
                                <div>{data.courseName}</div>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    className="bg-blue-500 p-2 rounded-3xl"
                                    onClick={() => editModal(data.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 p-2 rounded-3xl"
                                    onClick={() => deleteModal(data.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
    return (
        <div className="bg-white w-full h-full">
            {courseData}
        </div>
    );
}

const mapStatetoprops = (state) => {
    return {
        courses: state.getCourse,
    };
};

const mapDispatchtoprops = (dispatch) => {
    return {
        actions: bindActionCreators(connectActions, dispatch),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Courses);
