import { Router } from "express";
import { authentication } from "../utils/authenticationMiddleware.js";
import CourseController from "../controllers/courseController.js";

export const courseRouter = Router()

courseRouter.get('/courses/getCourse',authentication,CourseController.getCourses)
courseRouter.post('/courses/addCourse',authentication,CourseController.addCourse)
courseRouter.post('/courses/updateCourse',authentication,CourseController.updateCourse)
courseRouter.delete('/courses/deleteCourse/:id',authentication,CourseController.deleteCourse)