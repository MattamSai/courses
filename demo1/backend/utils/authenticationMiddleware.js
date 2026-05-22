import jwt from "jsonwebtoken"

export const authentication = (req,res,next) =>{
    // console.log('req',req.cookies)
    const {token}=req.cookies
    if(!token){
        return res.status(400).send({
            success:false,
            data:"token not found"
        })
    }

    const user = jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!user){
        return res.status(400).send({
            success:false,
            data:"invalid token"
        })
    }

    // console.log('user',user)

    req.user=user
    next()
}