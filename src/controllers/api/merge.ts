import { Request, Response, NextFunction } from 'express';

export const merge = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.json({});
    } catch {
        return res.status(500).send();
    }
};
