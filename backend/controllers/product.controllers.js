import Product from "../models/product.model.js";
import mongoose from "mongoose";
import express from "express";
const router = express.Router();

// Get all products
export const getProducts = async (req, res) => {        
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error.message });
    }
}; 

export const createProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    // console.log("id :",id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No product with id: ${id}`);
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }

    catch{
    
        res.status(500).json({success: false, message: "Server error!"});
    }
};


export const updateProduct = async (req, res) => {
	const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};