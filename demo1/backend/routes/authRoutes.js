import {Router} from "express"
import UserRegisterController from "../controllers/userRegisterController.js"
import UserController from "../controllers/UserController.js"
import { authentication } from "../utils/authenticationMiddleware.js"

export const router = Router()

router.get("/",(req,res)=>{
    res.send("ask")
})

router.post("/user/register",UserRegisterController)
router.post("/user/login",UserController.userLogin)
router.post("user/getProfile",authentication,UserController.getProfile)
router.post("/user/logout",authentication,UserController.logoutUser)

router.get("/user-verify",authentication,(req,res)=>{
    res.send({
        success:true,
        user:req.user
    })
})
router.get("/user/getProfile",authentication,UserController.getProfile)