import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class CourseModel extends Model{
        static associate (models){
            CourseModel.belongsTo(models.UserModel,{
                foreignKey:"userId"
            })
        }
    }
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
            type:DataTypes.TEXT
        },
        isActive:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        tableName:'course',
        underscored:true,
        sequelize
    })
    return CourseModel
}