import bcrypt from "bcrypt";
import AdminModel from "./models/adminModel.js";
import sequelize from "./config/database.js";

const seedAdmin = async () => {
  await sequelize.sync();

  const hashedPassword = await bcrypt.hash("himatifuninus24", 10);

  await AdminModel.create({
    username: "HIMATIF",
    password: hashedPassword,
  });

  console.log("Admin berhasil dibuat!");
  process.exit();
};

seedAdmin();