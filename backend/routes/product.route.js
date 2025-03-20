import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

const router = express.Router();



router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch (error) {
        console.error("Error in fetching products ",error.message);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
});

router.post("/", async (req, res) => {

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

router.delete("/:id", async (req, res) => {
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


//put method updates all field patch method updates only the field that is passed
//router.put("/api/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const product = req.body;


//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({success: false, message: "Invalid product id   "});    
//     }

//    try{
//     const updatedProduct = await Product.findByIdAndUpdate(id , product , {new: true});
//     res.status(200).json({success: true, message: "Product updated successfully", data: updatedProduct});
//    }catch(error){
//     res.status(500).json({success: false, message: "Server Error"});
//    }
// });


export { router as productRoutes };