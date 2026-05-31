import React from "react";
import Modal from "../utils/modal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as connectionActions from "../redux/actions/coursesAction.js"

console.log(connectionActions)
function DeleteCoursesModal({ data, onClose , actions}) {

  console.log('check')
  console.log('action',actions)
    const onSubmitClicked = async() => {
      actions.deleteCourse(data.id)
      onClose()
    };

    let selectedCourse=null;

    selectedCourse=(
      <div className="grid grid-cols-2 gap-2">
        <div>Name</div>
        <div>{data.courseName}</div>
        <div>Data</div>
        <div>{data.data}</div>
      </div>
    )

    return (
        <div>
            <Modal
                data={selectedCourse}
                onClose={onClose}
                actionText={"Delete"}
                onSubmit={onSubmitClicked}
            ></Modal>
        </div>
    );
}

const mapDispatchtoprops = (dispatch) =>{
  return {
    actions:bindActionCreators(connectionActions,dispatch)
  }
}

export default connect(null,mapDispatchtoprops)(DeleteCoursesModal);
