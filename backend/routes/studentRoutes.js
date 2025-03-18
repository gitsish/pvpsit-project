import express from "express";
import { verifyStudent } from "../middleware/authMiddleware.js";

const router = express.Router();

// Students can only view resources
router.get("/resources", verifyStudent, (req, res) => {
  res.json({ message: "Resources Fetched", resources });
});

export default router;
