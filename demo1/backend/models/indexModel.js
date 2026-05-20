import coursesModel from "./coursesModel.js";
import { connect } from "../configs/db.js";
import userModel from "./userModel.js";

let models={}

export const UserModel = userModel(connect)
export const CourseModel = coursesModel(connect)

models={
    UserModel,
    CourseModel
}

Object.values(models).forEach((model)=>{
    if(model.associate){
        model.associate(models)
    }
})

await connect.sync()

export default models
