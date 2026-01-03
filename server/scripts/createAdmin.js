require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@tradingtitans.com",
    password: hashed
  });

  console.log("✅ Admin created");
  process.exit();
})();
