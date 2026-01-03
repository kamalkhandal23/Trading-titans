const express = require("express");
const Video = require("../models/Video");
const auth = require("../middleware/auth.middleware");
const adminOnly = require("../middleware/admin.middleware");

const router = express.Router();

// ✅ PUBLIC — Get all videos
router.get("/", async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

// 🔐 ADMIN — Add video
router.post("/", auth, adminOnly, async (req, res) => {
  const video = new Video(req.body);
  await video.save();
  res.json(video);
});

// 🔐 ADMIN — Update video
router.put("/:id", auth, adminOnly, async (req, res) => {
  const updatedVideo = await Video.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedVideo);
});

// 🔐 ADMIN — Delete video
router.delete("/:id", auth, adminOnly, async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
