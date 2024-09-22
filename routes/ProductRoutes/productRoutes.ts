import express from "express";
import createProduct from '../../controllers/ProductController/createProduct';
import getProduct from '../../controllers/ProductController/getProduct';
import updateProduct from '../../controllers/ProductController/updateProduct';
import deleteProduct from '../../controllers/ProductController/deleteProduct';
import productValidator from '../../middleware/ProductValidator/productValidator';
import VerifyToken from '../../middleware/VerifyToken';
import verifyRole from '../../middleware/verifyRole';



const router = express.Router();

router.post('/', productValidator.validatorParams, productValidator.validator,VerifyToken, verifyRole(['admin']), createProduct);
router.get('/:id', productValidator.idValidator,getProduct);
router.put('/:id', productValidator.idValidator,productValidator.validatorParams, productValidator.validator,VerifyToken, verifyRole(['admin']), updateProduct);
router.delete('/:id', productValidator.idValidator,VerifyToken, verifyRole(['admin']), deleteProduct);

export default router;