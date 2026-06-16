import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class CourseModel extends Model {
        static associate(models) {
            CourseModel.belongsTo(models.UserModel, {
                foreignKey: "user_id",
            });

            CourseModel.belongsTo(models.MediaModel, {
                foreignKey: "thumbnail_media_id",
            });
        }
    }
    CourseModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            courseName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            data: {
                type: DataTypes.TEXT,
            },
            isActive: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tableName: "course",
            underscored: true,
            sequelize,
        },
    );
    return CourseModel;
};
