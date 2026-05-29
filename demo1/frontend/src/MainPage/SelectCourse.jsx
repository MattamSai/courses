import React, { act, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as connectionActions from "../redux/actions/coursesAction.js"
import { useNavigate } from 'react-router-dom'

function SelectCourse({courses,actions}) {

    const [selectedCourse,setSelectedCourse] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        actions.getCourses()
    },[])

    console.log('select',selectedCourse)
    if(selectedCourse){
        navigate(`/courses/${selectedCourse}`)
    }

    let course = null

    course = (
        <div className='flex gap-2 bg-white p-2'>
            <div>Select any course</div>
            <select className="w-1/3 p-1 border rounded text-center" 
            value={selectedCourse} 
            onChange={(e)=>{
            setSelectedCourse(e.target.value)}}>
                <option value="">Select course</option>
                {courses.data.map((data)=>{
                    return(
                        <option
                        key={data.id}
                        value={data.id}>
                            {data.courseName}
                        </option>
                    )
                })}
                
            </select>
        </div>
    )

  return (
    <div className='bg-white h-full w-full mt-4'>
        {course}
    </div>
  )
}

const mapStatetoprops = (state)=>{
    return {
        courses:state.getCourse
    }
}

const mapDispatchtoprops = (dispatch) =>{
    return {
        actions:bindActionCreators(connectionActions,dispatch)
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(SelectCourse)