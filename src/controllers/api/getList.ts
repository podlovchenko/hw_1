import { Request, Response, NextFunction } from 'express';

import db from '../../entities/Database';

export const getList = async (req: Request, res: Response) => {
    try {
        res.json(db.getAll());
    } catch {
        return res.status(500).send();
    }
};
