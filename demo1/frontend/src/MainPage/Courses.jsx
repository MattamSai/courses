import { act, useEffect, useState } from "react"
import * as connectActions from "../redux/actions/coursesAction.js"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom"

function Courses ({courses,actions}) {
    const [name,setName]=useState("")
    const [data,setData]=useState("")
    const  {id} = useParams()
    const navigate = useNavigate()


    let courseData=null;
    useEffect(()=>{
        actions.getCourses()
    },[])


    courseData=(
        <div className="p-2 m-2">
            <div className="text-bold">List of all the Available Courses</div>
            <div className="flex gap-2 mt-4">
                <div>S.NO</div>
                <div>Course Name</div>
            </div>
            {courses.data.map((data)=>{
                if(data.id==Number(id)){
                    return(
                    <div className="flex gap-12 p-2">
                        <div>{data.id} </div>
                        <div>{data.courseName}</div>
                    </div>   
                )
                }
            })}
        </div>
    )
    return (
        <div className="bg-white w-full h-full">
            {courseData}
        </div>
    )
}

const mapStatetoprops = (state)=>{
    return {
        courses:state.getCourse
    }
}

const mapDispatchtoprops = (dispatch)=>{
    return {
        actions:bindActionCreators(connectActions,dispatch)
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Courses)
