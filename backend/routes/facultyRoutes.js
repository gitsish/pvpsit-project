import express from "express";
import { verifyFaculty } from "../middleware/authMiddleware.js";

const router = express.Router();
let resources = []; // Temporary storage (replace with DB later)

// Faculty can upload resources
router.post("/upload", verifyFaculty, (req, res) => {
  const { link, title } = req.body;
  if (!link || !title) return res.status(400).json({ message: "Missing fields" });

  resources.push({ title, link });
  res.json({ message: "Resource Added", resources });
});

// Faculty can delete resources
router.delete("/delete/:index", verifyFaculty, (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= resources.length) return res.status(400).json({ message: "Invalid Index" });

  resources.splice(index, 1);
  res.json({ message: "Resource Deleted", resources });
});

export default router;
