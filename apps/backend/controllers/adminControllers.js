import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Admin from "../models/adminModel.js";
import Team from "../models/teamModel.js";
import Member from "../models/memberModel.js";

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Username tidak ditemukan" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Password salah" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ success: true, message: "Login berhasil", token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllData = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [{ model: Member, as: "members" }],
    });

    res.json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};