import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";


let loginValidator = [
    check('email')
        .isEmail()
        .withMessage('Debe ser un email válido.'),

    check('password')
        .isLength({ min: 8 })   
        .withMessage('La contraseña debe tener al menos 8 caracteres.')
        .matches(/[A-Z]/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula.')
        .matches(/[a-z]/)
        .withMessage('La contraseña debe contener al menos una letra minúscula.')
        .matches(/\d/)
        .withMessage('La contraseña debe contener al menos un número.')
        .matches(/[\W_]/)
        .withMessage('La contraseña debe contener al menos un carácter especial.'),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    loginValidator,
    validator
};