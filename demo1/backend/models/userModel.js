import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class UserModel extends Model {
        static associate(models) {
            UserModel.hasMany(models.CourseModel, {
                foreignKey: "user_id",
            });

            UserModel.hasMany(models.MediaModel, {
                foreignKey: "updated_by",
            });
        }
    }
    UserModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userEmail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            userPassword: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profileMediaId:{
                type:DataTypes.INTEGER,
                allowNull:true
            },
            isActive: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }, 
            updatedBy: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tableName: "user_login",
            underscored: true,
            timestamps: true,
            sequelize,
        },
    );
    return UserModel;
};
