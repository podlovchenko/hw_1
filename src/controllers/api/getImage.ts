import { Request, Response, NextFunction } from 'express';

import db from '../../entities/Database';

export const getImage = (req: Request, res: Response) => {
    const imageId = req.params.id;
    const image = db.get(imageId);

    if (!image) {
        return res.status(404).send({ message: 'Image not found' });
    }

    res.contentType(image.mimetype);

    return res.download(image.path);
};
