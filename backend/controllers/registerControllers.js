import Register from "../models/registerModel.js";

export const createRegister = async (req, res) => {
  try {
    const data = await Register.create(req.body);

    res.status(201).json({
      success: true,
      message: "Pendaftaran berhasil",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getRegisters = async (req, res) => {
  try {
    const data = await Register.findAll();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};