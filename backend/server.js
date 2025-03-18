import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/resources", resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
