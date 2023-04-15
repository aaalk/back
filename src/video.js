import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Video = db.define(
  "videoList",
  {
    id: {
      type: DataTypes.INTEGER,
      // autoIncrement: true,
      primaryKey: true,
    },
    chapterId: DataTypes.INTEGER,
    added: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "videoList",
  }
);