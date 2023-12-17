import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import {
  getProducts,
  getProductById,
} from '../controller/productController.js';

router.get('/').get(getProducts);
router.get('/:id').get(getProductById);

export default router;
