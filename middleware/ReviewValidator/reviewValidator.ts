import { param,check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('rating')
        .isInt({ min: 1, max: 5 })
        .withMessage('La calificación debe ser un número entre 1 y 5.'),

    check('comment')
        .isLength({ min: 10, max: 500 })
        .withMessage('El comentario debe tener entre 10 y 500 caracteres.')
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