import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Notes = db.define(
  "notesList",
  {
    id: {
      type: DataTypes.INTEGER,
      // autoIncrement: true,
      primaryKey: true,
    },
    videoId: DataTypes.INTEGER,
    noteTime: DataTypes.INTEGER,    
    colorId: DataTypes.INTEGER,
    text: DataTypes.STRING,

  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "notesList",
  }
);