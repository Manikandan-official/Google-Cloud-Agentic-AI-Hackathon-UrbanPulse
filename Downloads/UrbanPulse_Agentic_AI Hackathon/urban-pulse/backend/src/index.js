import reportRoutes from "./routes/report.routes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔥 CONNECTING REPORT ROUTES HERE
app.use("/api/reports", reportRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Urban Pulse Backend is LIVE 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
