import { param,check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('name')
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre del producto debe tener entre 3 y 50 caracteres.'),

    check('description')
        .isLength({ min: 10, max: 500 })
        .withMessage('La descripción debe tener entre 10 y 500 caracteres.'),

    check('category')
        .isLength({ min: 3, max: 50 })
        .withMessage('La categoría debe tener entre 3 y 50 caracteres.')
];

let idValidator = [
    param('id')
        .isInt({ min: 1 })
        .withMessage('El id debe ser un número entero positivo.')
        .isLength({ max: 4 })
        .withMessage('El id no puede tener más de 4 dígitos.')
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    validatorParams,
    idValidator,
    validator
};