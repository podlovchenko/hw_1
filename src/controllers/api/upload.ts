import { Request, Response } from 'express';

import db from '../../entities/Database';
import Image from '../../entities/Image';

export const upload = async (req: Request, res: Response) => {
    try {
        const { file } = req;

        if (!file) {
            return res.status(400).send();
        }

        const imageFile = new Image(file.mimetype, file.size, file.path);

        db.add(imageFile);

        return res.json(imageFile.toPublicJSON());
    } catch {
        return res.status(500).send();
    }
};
