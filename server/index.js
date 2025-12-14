require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", require("./routes/auth.routes"));
app.use("/api/blogs", require("./routes/blog.routes"));

app.get("/", (req, res) => {
  res.send("Trading Titans API Running");
});

// DB connect only if URI exists
if (process.env.MONGO_URI !== "PASTE_LATER") {
  connectDB();
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
