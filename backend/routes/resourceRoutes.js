import express from "express";
import Resource from "../models/resourceModel.js";

const router = express.Router();

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resources" });
  }
});

// Add a new resource
router.post("/", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newResource = new Resource({ title, description, link });
    await newResource.save();
    res.json(newResource);
  } catch (error) {
    res.status(500).json({ error: "Failed to add resource" });
  }
});

// Delete a resource
router.delete("/:id", async (req, res) => {
  try {
    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete resource" });
  }
});

export default router;
