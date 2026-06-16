import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/indexModel.js";
import { generateToken } from "../utils/generateToken.js";

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

        const payload = {
            id: user.id,
            userEmail: user.userEmail,
        };

        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:'1h'
        });

        if (!accessToken) {
            return res.status(401).send({
                success: false,
                data: "failed to generate new access token",
            });
        }

        res.cookie("accessToken",accessToken,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge: 60 * 60 * 1000
        });

        const refreshToken = jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:'30d'
        });

        if (!refreshToken) {
            return res.status(401).send({
                success: false,
                data: "failed to generate new refresh token",
            });
        }

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: "true",
            data: user,
        });
    }

    static async generateNewToken(req, res) {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).send({
                success: false,
                data: "failed to generate new refresh token",
            });
        }

        const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const payload = {
            id: user.id,
            userEmail: user.userEmail,
        };

        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1h",
        });

        if (!accessToken) {
            return res.status(401).send({
                success: false,
                data: "failed to generate new access token",
            });
        }
        return res.status(200).send({
            success: true,
            token: accessToken,
        });
    }

    static async getUser(req, res) {
        const { user } = req;
        console.log('user',user)
        if (!user) {
            return res.status(400).send({
                success: false,
                data: "unable to get data of user",
            });
        }

        const userId= user.id

        const userData = await UserModel.findOne({where:{id:userId}})

        if(!userData){
            return res.status(200).send({
                success:false,
                data:"user data not available"
            })
        }

        return res.status(200).send({
            success: true,
            data: userData,
        });
    }

    static async logoutUser(req, res) {
        res.clearCookie("token");
        return res.send({
            success: true,
            data: "user has been logged out",
        });
    }
}

export default UserController;
