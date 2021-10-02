import { Request, Response } from 'express';
import { replaceBackground } from 'backrem';
import fs from 'fs';
import sizeOf from 'image-size';

import db from '../../entities/Database';

export const merge = async (req: Request, res: Response) => {
    try {
        const { front: frontId, back: backId, color, threshold } = req.query;

        if (!frontId || !backId || !color || !threshold) {
            return res.status(400).send();
        }

        const frontImage = db.get(String(frontId));
        const backImage = db.get(String(backId));

        if (!frontImage || !backImage) {
            return res.status(404).send();
        }

        const frontSize = sizeOf(frontImage.path);
        const backSize = sizeOf(backImage.path);

        if (
            frontSize.width !== backSize.width ||
            frontSize.height !== backSize.height
        ) {
            return res.status(400).send();
        }

        const frontImageStream = fs.createReadStream(frontImage.path);
        const backImageStream = fs.createReadStream(backImage.path);
        const [r, g, b] = String(color)
            .split(',')
            .map((item) => Number(item));

        res.header('Content-Type', frontImage.mimeType);

        replaceBackground(
            frontImageStream,
            backImageStream,
            [r, g, b],
            Number(threshold)
        ).then((readableStream) => {
            readableStream.pipe(res);
        });
    } catch {
        return res.status(500).send();
    }
};
