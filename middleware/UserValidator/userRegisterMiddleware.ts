import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorRegister = [
    check('name')
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre debe tener entre 3 y 50 caracteres.')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('El nombre solo puede contener letras y espacios.'),

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

    check('confirmPassword')
    .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),

    
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    validatorRegister,
    validator
};