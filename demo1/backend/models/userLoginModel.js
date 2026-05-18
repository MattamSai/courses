import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class UserLoginModel extends Model{}
    UserLoginModel.init({
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
        userPassword:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'user_login',
        underscored:true,
        sequelize
    })
    return UserLoginModel
}