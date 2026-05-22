import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Registration = sequelize.define(
  "Registration",
  {
    team_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    angkatan: { type: DataTypes.STRING, allowNull: false },
    member_name_1: { type: DataTypes.STRING, allowNull: false },
    nim_1: { type: DataTypes.STRING, allowNull: false },
    member_name_2: { type: DataTypes.STRING, allowNull: false },
    nim_2: { type: DataTypes.STRING, allowNull: false },
    member_name_3: { type: DataTypes.STRING, allowNull: false },
    nim_3: { type: DataTypes.STRING, allowNull: false },
    member_name_4: { type: DataTypes.STRING, allowNull: false },
    nim_4: { type: DataTypes.STRING, allowNull: false },
    member_name_5: { type: DataTypes.STRING, allowNull: false },
    nim_5: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "registrations",
    timestamps: true,
  }
);

export default Registration;