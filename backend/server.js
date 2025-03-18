import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // import connectDB function from db.js
import Product from "./models/product.model.js"; // import Product model

dotenv.config(); // to access .env file

const app = express(); // create express app

app.use(express.json()); // to parse json data

app.post("/api/products", async (req, res) => {

    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success : false , message: "All fields are required" });
    }


    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, message: "Product added successfully" , data: newProduct});
    }
    catch (error) {
        console.error("Error in create product ",error.message);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    // console.log("id :",id);

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }

    catch{
    
        res.status(404).json({success: false, message: "Product not found in the database!"});
    }
});


app.listen(5000, () => {
  connectDB(); // call connectDB function
  console.log("Server started at http://localhost:5000 ");
});
