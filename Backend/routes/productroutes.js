import express from 'express';
// import Product from '../models/productmodel.js';
// import mongoose from "mongoose"; 
import { addProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
const router = express.Router();
// Import the product controller,controller is a file where we write the logic for the routes


router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.get('/',getProducts)
router.put('/:id',updateProduct)

export default router;