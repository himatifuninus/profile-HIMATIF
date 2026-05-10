import express from "express";

import {
  createRegister,
  getRegisters,
} from "../controllers/registerControllers.js";

const router = express.Router();

router.post("/register", createRegister);

router.get("/register", getRegisters);

export default router;