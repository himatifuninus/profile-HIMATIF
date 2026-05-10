import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Team = sequelize.define(
  "Team",
  {
    team_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    angkatan: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "teams",
    timestamps: true,
  }
);

export default Team;