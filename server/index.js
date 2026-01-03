require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

/* ================================
   ✅ CORS (NODE 24 SAFE)
================================ */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* BODY PARSER */
app.use(express.json());

/* ROUTES */
app.use("/api/admin", require("./routes/auth.routes"));
app.use("/api/blogs", require("./routes/blog.routes"));
app.use("/api/videos", require("./routes/video.routes"));

/* PUBLIC HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("Trading Titans API Running");
});

/* DB */
connectDB();
console.log("DB NAME =", mongoose.connection.name);

/* SERVER */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
