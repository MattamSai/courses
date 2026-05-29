import { Router } from "express";
import { authRouter } from "./authRoutes.js";
import { courseRouter } from "./courseRoutes.js";

export let router = Router()

router.use(
    authRouter,
    courseRouter
)