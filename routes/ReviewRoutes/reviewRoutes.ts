import express from "express";
import createReview from '../../controllers/ReviewController/createReview';
import getReview from '../../controllers/ReviewController/getReview';
import reviewValidator from '../../middleware/ReviewValidator/reviewValidator';
import VerifyToken from '../../middleware/VerifyToken';
import verifyRole from '../../middleware/verifyRole';

const router = express.Router();

router.post('/', reviewValidator.validatorParams, reviewValidator.validator,verifyToken,VerifyRole(['user','admin']), createReview);
router.get('/:id',reviewValidator.idValidator, reviewValidator.validator ,getReview);

export default router;	