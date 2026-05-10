import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Register = sequelize.define(
  "Register",
  {
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    member_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nim: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    angkatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "registrations",
    timestamps: true,
  }
);

export default Register;