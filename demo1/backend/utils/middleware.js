import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv"
configDotenv()

export async const authentication = (req,res,next) =>{
    const {token}=req.header.Authentication
    if(!token){
        return res.status(400).send({
            success:false,
            data:"token not found"
        })
    }

    const validateToken = await jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!validateToken){
        return res.status(400).send({
            success:false,
            data:"invalid token"
        })
    }


    next()
}