import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserLoginModel from "../models/indexModel.js";
import { configDotenv } from "dotenv";
configDotenv();

class UserController {

    static async userLogin(req, res) {
        const { userEmail, userPassword } = req.body;
        if (!userEmail || !userPassword) {
            return res.status(400).send({
                success: "false",
                data: "User Details not found",
            });
        }

        const user = await UserLoginModel.findOne({
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

        const token = await jwt.sign(
            { id: user.id, userEmail: user.userEmail },
            process.env.JWT_SECRET_KEY,
        );
        if (!token) {
            return res.status(400).send({
                success: false,
                data: "taken genartion failed",
            });
        }

        return res.status(200).json({
            success: "true",
            data: user,
            token,
        });
    }

}

export default UserController;
