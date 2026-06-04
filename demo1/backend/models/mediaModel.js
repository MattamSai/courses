import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class MediaModel extends Model {
    static associate(models) {
      MediaModel.belongsTo(models.UserModel, {
        foreignKey: "updatedBy",
      });
    }
  }

  MediaModel.init(
    {
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storedName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storageKey: {
        type:DataTypes.STRING
      },
      mediaType: {
        type: DataTypes.STRING
      },
      fileSize: {
        type: DataTypes.BIGINT,
      },

      mimeType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileHash: {
        type:DataTypes.STRING
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "media",
      underscored: true,
      timestamps: true,
    }
  );

  return MediaModel;
};