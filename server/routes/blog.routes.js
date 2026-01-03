const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/auth.middleware");
const adminOnly = require("../middleware/admin.middleware");
const slugify = require("slugify");

const router = express.Router();

/* =========================
   PUBLIC ROUTES
========================= */

// GET ALL BLOGS
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// GET BLOG BY SLUG
router.get("/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  res.json(blog);
});

/* =========================
   ADMIN ROUTES
========================= */

// CREATE BLOG
router.post("/", auth, adminOnly, async (req, res) => {
  console.log("🔥 HIT CREATE BLOG ROUTE");
  console.log("🔥 req.user =", req.user);
  console.log("🔥 req.body =", req.body);

  const slug = slugify(req.body.title, { lower: true });

  const blog = new Blog({
    ...req.body,
    slug,
  });

  await blog.save();

  console.log("✅ BLOG SAVED WITH ID:", blog._id);

  res.json(blog);
});


// UPDATE BLOG
router.put("/:id", auth, adminOnly, async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE BLOG
router.delete("/:id", auth, adminOnly, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
