import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import sequelize from "./config/database.js";
import registerRoutes from "./routes/registerRoutes.js";

// CONFIG
dotenv.config();

// INIT APP
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api", registerRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Backend HIMATIF ICC Running",
  });
});

// DATABASE CONNECTION
sequelize
  .authenticate()
  .then(() => {
    console.log(
      chalk.green.bold("Database Connected")
    );
  })
  .catch((err) => {
    console.log(
      chalk.red.bold("Database Error:")
    );

    console.log(chalk.red(err));
  });

// SYNC DATABASE
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(
      chalk.cyan.bold("Database Synced")
    );
  })
  .catch((err) => {
    console.log(
      chalk.red.bold("Sync Error:")
    );

    console.log(chalk.red(err));
  });

// PORT
const PORT = process.env.PORT || 5000;

// RUN SERVER
app.listen(PORT, () => {
  console.log(
    chalk.yellow.bold(
      `Server running on port ${PORT}`
    )
  );
});