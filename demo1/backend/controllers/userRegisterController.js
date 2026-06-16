import bcrypt from "bcrypt"
import {UserModel} from "../models/indexModel.js"
import { generateToken } from "../utils/generateToken.js"
import jwt from 'jsonwebtoken'

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

    const payload={
        id:user.id,
        userEmail:user.userEmail
    }

    const accessToken = await jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'1h'
    })

    if (!accessToken) {
        return res.status(401).send({
            success: false,
            data: "access token genartion failed",
        });
    }
    
    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge: 60 * 60 * 1000
    });

    const refreshToken = await jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:'30d'
    })

    if(!refreshToken){
        return res.status(401).send({
            success:false,
            data:"refresh token failed to generate"
        })
    }
    
    res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
         maxAge: 30 * 24 * 60 * 60 * 1000
    })

    return res.status(200).send({
        success:true,
        data:user
    })
}

export default UserRegisterController