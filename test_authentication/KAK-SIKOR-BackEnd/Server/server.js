const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const cartRoutes = require("./routes/cartRoute.js");
const orderRoute = require("./routes/orderRoute");
const orderHistoryRoute = require("./routes/orderHistoryRoute");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const morgan = require("morgan");
require("dotenv").config();

const ReviewRoute = require("./routes/reviewRoute");
const { findOneAndUpdate } = require("./models/categoryModel");

dotenv.config({ path: "./config.env" });

// express app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true
}))
app.use(cookieParser())

// routes
app.use("/reviews", ReviewRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/category", categoryRoute);
app.use("/api", cartRoutes);
app.use("/orders", orderRoute);
app.use("/orderHistories", orderHistoryRoute);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to MongoDB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });