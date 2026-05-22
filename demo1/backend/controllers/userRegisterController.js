import bcrypt from "bcrypt"
import {UserModel} from "../models/indexModel.js"
import { generateToken } from "../utils/generateToken.js"

async function UserRegisterController(req,res){
    const {userName,userEmail,userPassword} = req.body
    console.log('userName',userName)
    console.log('userEmail',userEmail)
    console.log('userPassword',userPassword)
    if(!userName || !userEmail || !userPassword){
        return res.status(400).send({
            success:"false",
            data:"User Details not found"
        })
    }

    const ifUserExist = await UserModel.findOne({where:{userEmail:userEmail}})
    if(ifUserExist){
        return res.status(400).send({
            success:false,
            data:"User is already registered"
        })
    }

    const hash = await bcrypt.hash(userPassword,10)
    if(!hash){
        return res.status(400).send({
            success:"false",
            error:"Unable to hash user password"
        })
    }
    const user = await UserModel.create({
        userName,
        userEmail,
        userPassword:hash
    })
    const token = await generateToken({id:user.id,userEmail:user.userEmail})
    if (!token) {
        return res.status(400).send({
            success: false,
            data: "taken genartion failed",
        });
    }
    
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    });

    return res.status(200).send({
        success:true,
        data:user
    })
}

export default UserRegisterController