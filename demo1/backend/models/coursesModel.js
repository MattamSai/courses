import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class CourseModel extends Model{}
    CourseModel.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        courseName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data:{
            type:DataTypes.STRING
        }
    },{
        tableName:'course',
        underscored:true,
        sequelize
    })
    return CourseModel
}