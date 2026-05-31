import { CourseModel } from "../models/indexModel.js";

class CourseController {
    static async getCourses(req, res) {
        const data = await CourseModel.findAll({where:{isActive:1}});
        if (!data) {
            return res.status(400).send({
                success: false,
                data: "cant get courses",
            });
        }
        return res.status(200).send({
            success: true,
            data,
        });
    }

    static async addCourse(req, res) {
        const { name, description } = req.body;
        const userId = req && req.user && req.user.id;
        let newCourse = null;
        if (!name || !description) {
            return res.status(400).send({
                success: false,
                data: "course details not found",
            });
        }
        try {
            let course = await CourseModel.findOne({
                where: { courseName: name },
            });
            if (course) {
                course.data = description;
                await course.save();
            }
            newCourse = await CourseModel.create({
                userId,
                courseName: name,
                data: description,
            });
            if (!newCourse) {
                return res.status(400).send({
                    success: false,
                    data: "failed to create new course",
                });
            }
        } catch (error) {
            return res.status(500).send({
                success: false,
                data: error.message,
            });
        }

        return res.status(200).send({
            success: true,
            data: newCourse,
        });
    }

    static async updateCourse(req, res) {
        console.log('req',req)
        console.log('req',req.body)
        const { id, courseName, data } = req.body;
        const course = await CourseModel.findOne({ where: { id } });
        console.log('course',course)
        if (!course) {
            return res.status(400).send({
                success: false,
                data: "course not found",
            });
        }
        course.courseName = courseName;
        course.data = data;
        await course.save();
        console.log('updatedcourse',course)
        return res.status(200).send({
            success: true,
            data: course,
        });
    }

    static async deleteCourse(req, res) {
        console.log(req.params)
        const { id } = req.params;
        console.log(id)
        if (!id) {
            return res.status(400).send({
                success: false,
                data: "course id not found",
            });
        }
        const course = await CourseModel.findOne({ where: { id } });
        if (!course) {
            return res.status(400).send({
                success: false,
                data: "course not found",
            });
        }
        course.isActive = 0;
        await course.save();
        return res.status(200).send({
            success: true,
            data: course,
        });
    }
}
export default CourseController;
