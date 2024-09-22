import express from "express";
import registerUser from '../../controllers/UserController/registerUser';
import loginUser from '../../controllers/UserController/loginUser';
import userRegisterMiddleware from "../../middleware/UserValidator/userRegisterMiddleware";
import userAuthMiddleware from "../../middleware/UserValidator/userAuthMiddleware";

const router = express.Router();

router.post('/register', userRegisterMiddleware.validatorRegister, userRegisterMiddleware.validator, registerUser);
router.post('/login', userAuthMiddleware.loginValidator, userAuthMiddleware.validator, loginUser);

export default router;