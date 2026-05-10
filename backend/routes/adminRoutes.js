import express from "express";
import { loginAdmin, getAllData } from "../controllers/adminControllers.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = express.Router();

router.post("/admin/login", loginAdmin);
router.get("/admin/data", authAdmin, getAllData);

export default router;