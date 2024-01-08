import express from 'express';
import{
    addProduct,
    getAllProduct,
    getProductById,
    deleteProduct,
    updateProduct,
} from "../controllers/productController.js"

import { authenticate,checkRole } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/add', addProduct);
router.get('/:id',getProductById);
router.get('/all/products', getAllProduct);
router.delete('/delete/:id', authenticate, checkRole('productcreater'),deleteProduct);

export default router;