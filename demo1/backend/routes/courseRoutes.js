import { Router } from "express";
import { authentication } from "../utils/authenticationMiddleware.js";
import CourseController from "../controllers/courseController.js";

export const courseRouter = Router()

courseRouter.get('/courses/getCourse',authentication,CourseController.getCourses)
courseRouter.post('/courses/addCourse',authentication,CourseController.addCourse)