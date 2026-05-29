import { useState } from "react"
import { useEffect } from "react"
import * as coursesActions from "../redux/actions/coursesAction.js"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"

function AddNewCourse({actions,course}) {

    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [submitData,setSubmitData]=useState(false)
    

    // useEffect(()=>{
    //     console.log('sa',submitData)
    //     actions.addCourses(courseData)
    // },[submitData])

    let addCourse = ()=>{
        actions.addCourses(courseData)
    }
    
    
    const courseData = {
        name,
        description
    }

    return (
        <div className="h-96 w-full bg-gray-300 p-5">

            <div className="grid grid-cols-2 mb-2">
                <label>Course Name :</label>
                <input
                    type="text"
                    className="border bg-white ml-2 h-10"
                    onChange={(e)=>{setName(e.target.value)}}
                />
            </div>

            <div className="grid grid-cols-2">
                <label>Content :</label>
                <textarea
                    className="border bg-white ml-2 h-72"
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </div>

            <button type="submit" onClick={addCourse}>Submit</button>

        </div>
    )
}

const mapStatetoprops = (state)=>{
    return {
        course:state.addCourses
    }
}

const mapDispatchtoprops = (dispatch)=>{
    return {
        actions:bindActionCreators(coursesActions,dispatch)
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(AddNewCourse)