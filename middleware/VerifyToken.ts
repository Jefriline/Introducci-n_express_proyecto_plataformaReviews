import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();


interface JwtPayload {
    data: {id: number, role: string},
    exp: number,
    iat: number
}

//Bearer
const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');


    if (authorization) {
        const token = authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json(
                { status: 'No has enviado un token' }
            );
        }

        try {
            let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;
            req.body.id = decoded.data.id; 
            req.body.role = decoded.data.role;
            next(); 
        } catch (error) {
            return res.status(403).json(
                { status: 'no autorizado' }
            );
        }
    } else {
        return res.status(403).json(
            { status: "Se requiere el header de autorización" }
        );
    }
}


export default verifyToken;