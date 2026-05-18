import userRegisterModel from "./userRegisterModel.js";
import userLoginModel from "./userLoginModel.js";
import coursesModel from "./coursesModel.js";
import { connect } from "../configs/db.js";

export const userRegister = userRegisterModel(connect)
export const userLogin = userLoginModel(connect)
export const course = coursesModel(connect)

