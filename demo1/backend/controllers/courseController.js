import { CourseModel } from "../models/indexModel.js";

class CourseController {

    static async getCourses (req,res) {
        const data = await CourseModel.findAll()
        if(!data){
            return res.status(400).send({
                success:false,
                data:'cant get courses'
            })
        }
        return res.status(200).send({
            success:true,
            data
        })
    }

    static async addCourse(req, res) {
        const { name, description } = req.body;
        const userId= req && req.user && req.user.id
        let newCourse=null
        console.log("name", name);
        console.log("desc", description);
        console.log('user',req.user)
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
            console.log(error.message);
            console.log(error.original);

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
}
export default CourseController;
