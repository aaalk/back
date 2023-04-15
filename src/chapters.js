import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Chapters = db.define(
  "chaptersList",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sortorder: DataTypes.INTEGER,
    icon: DataTypes.STRING,
    title: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "chaptersList",
  }
);