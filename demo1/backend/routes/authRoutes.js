import {Router} from "express"
import UserRegisterController from "../controllers/userRegisterController.js"
import UserController from "../controllers/UserController.js"
import { authentication } from "../utils/authenticationMiddleware.js"
import CourseController from "../controllers/courseController.js"

export const authRouter = Router()

authRouter.get("/",(req,res)=>{
    res.send("Welcome to auth routes")
})

authRouter.post("/user/register",UserRegisterController)
authRouter.post("/user/login",UserController.userLogin)
authRouter.post("/user/logout",authentication,UserController.logoutUser)

authRouter.get("/user-verify",authentication,(req,res)=>{
    res.send({
        success:true,
        user:req.user
    })
})

authRouter.get("/user/getProfile",authentication,UserController.getProfile)

