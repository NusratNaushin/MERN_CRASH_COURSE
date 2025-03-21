import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { createProduct, getProducts ,deleteProduct , updateProduct} from "../controllers/product.controllers.js";

const router = express.Router();


router.get("/", getProducts);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
router.put("/:id", updateProduct);
export { router as productRoutes };