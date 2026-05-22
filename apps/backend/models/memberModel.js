import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Team from "./teamModel.js";

const Member = sequelize.define(
  "Member",
  {
    team_id: { type: DataTypes.INTEGER, allowNull: false },
    member_name: { type: DataTypes.STRING, allowNull: false },
    nim: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "members",
    timestamps: true,
  }
);

// Relasi
Team.hasMany(Member, { foreignKey: "team_id", as: "members" });
Member.belongsTo(Team, { foreignKey: "team_id", as: "team" });

export default Member;