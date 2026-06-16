import coursesModel from "./coursesModel.js";
import { connect } from "../configs/db.js";
import userModel from "./userModel.js";
import mediaModel from "./mediaModel.js";

let models={}

export const UserModel = userModel(connect)
export const CourseModel = coursesModel(connect)
export const MediaModel = mediaModel(connect)

models={
    UserModel,
    CourseModel,
    MediaModel
}

Object.values(models).forEach((model)=>{
    if(model.associate){
        model.associate(models)
    }
})


export default models
