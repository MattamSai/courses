import { useEffect, useState } from "react";
import AddNewCourse from "./AddNewCourse";
import Courses from "./Courses";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as connectActions from "../redux/actions/coursesAction.js"
import { NavLink } from "react-router-dom";

function Home({courses,actions}) {
    const [showAddCourse,setShowAddCourse]=useState(false)
        const [name,setName]=useState("")
    const [data,setData]=useState("")

    useEffect(()=>{
        actions.getCourses()
    },[])

    console.log('courses',courses)
    useEffect(()=>{
        if(courses.loaded){
            actions.getCourses()
        }
    },[courses.loaded])


    const addCourse = ()=>{
        setShowAddCourse(!showAddCourse)
    }

    let courseData=null;

        courseData=(
        <div className="p-2 m-2">
            <div className="text-bold">List of all the Available Courses</div>
            <div className="flex gap-2 mt-4">
                <div>S.NO</div>
                <div>Course Name</div>
            </div>
            {courses.data.map((data)=>{
                return(
                    <div className="flex gap-12 p-2">
                        <div>{data.id} </div>
                        <NavLink to={`/courses/${data.id}`}>{data.courseName}</NavLink>
                    </div>   
                )    
            })}
        </div>
    )

    return (
        <div className="bg-white p-8 h-screen w-full">
            <h1>Welcome to Home Page</h1>
            <button onClick={addCourse} className="border rounded bg-gray-300 p-1">+ Add New Course</button>
            {showAddCourse && <div>
                <AddNewCourse/>
            </div>    
            }
            {!showAddCourse && <div>
                {courseData}
            </div>}
        </div>
    );
}

const mapStatetoprops = (state)=>{
    console.log('sta',state)
    return {
        courses:state.getCourse
    }
}

const mapDispatchtoprops = (dispatch)=>{
    return {
        actions:bindActionCreators(connectActions,dispatch)
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Home)