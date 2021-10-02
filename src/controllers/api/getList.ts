import { Request, Response } from 'express';

import db from '../../entities/Database';

export const getList = (req: Request, res: Response) => {
    return res.json(db.getAll());
};
