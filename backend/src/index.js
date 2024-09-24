require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected at ${process.env.MONGODB_URL}`);
    app.listen(process.env.BACKEND_PORT, () => {
      console.log(`Server running at port ${process.env.BACKEND_PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
})();
