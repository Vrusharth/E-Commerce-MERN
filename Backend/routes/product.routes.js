import express from 'express';
import Product from './models/products.model.js'; 
import mongoose from "mongoose"; 

const router = express.Router();
// Import the product controller,controller is a file where we write the logic for the routes


router.post('/', async (req, res) => {
    const product = req.body;
      // Validate input fields
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: 'Please fill all the fields' });
    }
    try {    
      const newProduct = new Product(product); 
      await newProduct.save();  // Save the product to MongoDB
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    const {id}=req.params;
    console.log("id:",id);
    try{
      await Product.findByIdAndDelete(id)
      res.status(200).json({ success:true,message:"Product deleted successfully"})
    }catch(error){
      res.status(500).json({success:false, message:"Product not found"})
    }
  });
  
  router.get('/',async(req,res)=>{
      try{
      const products=await Product.find({});
      res.status(200).json({success:true,data:products})
    }catch(error){
      console.log("Error in fetching products:",error);
      res.status(500)
    }
  })
  router.put('/:id',async(req,res)=>{
    const { id }=req.params
  
    const product=req.body
  
    // if invalid id is requested then Validate
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false,message:"Invalid Product ID"})
    }
    try{
      const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
      res.status(200).json({success:true,data:updatedProduct})
    }catch(error){
     
      res.status(500).json({success:false,message:"Error in updating the product"})
      
    }
  })

export default router;