import { Request, Response, NextFunction } from 'express';


const verifyRole = (requiredRole: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (requiredRole.includes(req.body.role)) {
            next(); 
        } else {
            return res.status(403).json({ status: 'Acceso denegado' });
        }
    };
};

export default verifyRole;
