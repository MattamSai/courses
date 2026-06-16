import { MediaModel, UserModel } from "../models/indexModel.js";
import { getMediaType } from "../utils/helpers.js";
import crypto from "crypto";
import fs from "fs";

class MediaController {
    static async getAllMedia(req, res) {
        const data = await MediaModel.findAll({ where: { isActive: 1 } });

        if (!data) {
            return res.status(400).send({
                success: false,
                data: "failed to get images",
            });
        }

        console.log('data',data)
        return res.status(200).send({
            success: true,
            data,
        });
    }

    static async addMedia(req, res) {
        const { id } = req.user;
        if (!id) {
            return res.status(400).send({
                success: false,
                data: "you are not authorized to get this data",
            });
        }
        const file = req.file;
        if (!file) {
            return res.status(400).send({
                success: false,
                data: "file not found",
            });
        }

        const buffer = fs.readFileSync(file.path);
        const hash = crypto.createHash("sha256").update(buffer).digest("hex");
        const data = await MediaModel.create({
            fileName: file.originalname,
            fileSize: file.size,
            storedName: file.filename,
            mimeType: file.mimetype,
            mediaType: getMediaType(file.mimetype),
            storageKey: file.path.replace(/\\/g, "/"),
            fileHash: hash,
            updatedBy: id,
        });

        if (!data) {
            return res.status(400).send({
                success: false,
                data: "failed to create new image",
            });
        }

        return res.status(200).send({
            success: true,
            data,
        });
    }

    static async updateMedia(req, res) {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).send({
                success: false,
                data: "user id not found",
            });
        }
        const id = req.params;
        if (!id) {
            return res.status(400).send({
                success: false,
                data: "cant find image id",
            });
        }
        const data = req.file;
        if (!data) {
            return res.status(400).send({
                success: false,
                data: "cant find image data",
            });
        }

        const buffer = await fs.promises.readFile(data.path);
        const hash = crypto.createHash("sha256").update(buffer).digest("hex");

        const newImage = await MediaModel.create({
            fileName: data.originalname,
            fileSize: data.size,
            storedName: data.filename,
            mimeType: data.mimetype,
            mediaType: getMediaType(data.mimetype),
            storageKey: data.path.replace(/\\/g, "/"),
            fileHash: hash,
            updatedBy: userId,
        });
        const oldImage = await MediaModel.findOne({ where: { id } });
        if (!oldImage) {
            return res.status(400).send({
                success: false,
                data: "cant get image from database",
            });
        }

        await fs.promises.unlink(oldImage.storageKey);
        oldImage.isActive = 0;
        await oldImage.save();

        await UserModel.update({profileMediaId:newImage.id},{
            where:{
                id:userId
            }
        })

        return res.status(200).send({
            success: true,
            data: newImage,
        });
    }

    static async deleteMedia(req, res) {}
}

export default MediaController;
