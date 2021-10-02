import { Request, Response } from 'express';

import { removeFile } from '../../utils/fs';
import db from '../../entities/Database';

export const deleteImage = async (req: Request, res: Response) => {
    try {
        const imageId = req.params.id;
        const image = db.get(imageId);

        if (!image) {
            return res.status(404).send();
        }

        await removeFile(image.path);

        db.remove(imageId);

        return res.json({ id: imageId });
    } catch {
        return res.status(500).send();
    }
};
