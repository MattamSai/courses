import jwt from "jsonwebtoken"

export const authentication = (req, res, next) => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
        return res.status(401).send({
            success: false,
            data: "access token not found",
        });
    }

    try {
        const user = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        );

        req.user = user;

        console.log('user',user)

        next();

    } catch (error) {
        return res.status(401).send({
            success: false,
            data: "invalid or expired access token",
        });
    }
};