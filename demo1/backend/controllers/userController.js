import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/indexModel.js";
// import { configDotenv } from "dotenv";
import { generateToken } from "../utils/generateToken.js";
// configDotenv();

class UserController {

    static async userLogin(req, res) {
        const { userEmail, userPassword } = req.body;
        if (!userEmail || !userPassword) {
            return res.status(400).send({
                success: "false",
                data: "User Details not found",
            });
        }

        const user = await UserModel.findOne({
            where: {
                userEmail,
            },
        });
        if (!user) {
            return res.status(400).send({
                success: false,
                data: "user email not found",
            });
        }

        const validatePassword = await bcrypt.compare(
            userPassword,
            user.userPassword,
        );
        if (!validatePassword) {
            return res.status(400).send({
                success: false,
                data: "incorrect password",
            });
        }

        const token = await generateToken(
            { id: user.id, userEmail: user.userEmail }
        );
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
        })

        return res.status(200).json({
            success: "true",
            data: user
        });
    }

    static async getProfile(req,res) {
        const {user}=req
        if(!user){
            return res.status(400).send({
                success:false,
                data:"unable to get data of user"
            })
        }
        return res.status(200).send({
            success:true,
            data:user
        })
    }

    static async logoutUser(req,res) {
        res.clearCookie("token")
        return res.send({
            success:true,
            data:"user has been logged out"
        });
    }
}

export default UserController;
