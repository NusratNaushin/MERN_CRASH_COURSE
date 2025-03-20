import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // import connectDB function from db.js

import { productRoutes } from "./routes/product.route.js";// ✅ Import productRoutes

dotenv.config(); // to access .env file

const app = express(); // create express app

app.use(express.json()); // to parse json data

app.use("/api/products", productRoutes); // ✅{

app.listen(5000, () => {
  connectDB(); // call connectDB function
  console.log("Server started at http://localhost:5000 ");
});
