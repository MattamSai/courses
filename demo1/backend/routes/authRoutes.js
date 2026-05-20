import {Router} from "express"
import UserRegisterController from "../controllers/userRegisterController.js"
import UserController from "../controllers/UserController.js"

export const router = Router()

router.get("/",(req,res)=>{
    res.send("ask")
})

router.post("/user/register",UserRegisterController)
router.post("user/login",UserController.userLogin)