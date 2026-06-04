import { Router } from "express";
import { authentication } from "../utils/authenticationMiddleware.js";
import MediaController from "../controllers/mediaController.js";
import { upload } from "../utils/multer.js";

export const mediaRouter = Router()

mediaRouter.get('/media/getAllMedia',authentication,upload.single("media"),MediaController.getAllMedia)
mediaRouter.post('/media/addMedia',authentication,upload.single("media"),MediaController.addMedia)
mediaRouter.put('/media/updateMedia',authentication,upload.single("media"),MediaController.updateMedia)
mediaRouter.delete('media/deleteMedia',authentication,upload.single("media"),MediaController.deleteMedia)