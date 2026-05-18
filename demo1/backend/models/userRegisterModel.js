import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class UserRegisterModel extends Model{}
    UserRegisterModel.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userEmail:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userPassword:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'user_register',
        underscored:true,
        sequelize
    })
    return UserRegisterModel
}