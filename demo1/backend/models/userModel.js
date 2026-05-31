import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class UserModel extends Model{
        static associate(models){
            UserModel.hasMany(models.CourseModel,{
                foreignKey:"userId"
            })
        }
    }
    UserModel.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userEmail:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        userPassword:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        tableName:'user_login',
        underscored:true,
        sequelize
    })
    return UserModel
}