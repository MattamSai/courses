import Jwt from "jsonwebtoken"


export const generateToken = async (data)=>{
    const token = await Jwt.sign(data,process.env.JWT_SECRET_KEY)
    if(!token){
        return res.status(400).send({
            success:false,
            data:"cant generate token"
        })
    }
    return token
}