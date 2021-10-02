import fs from 'fs';
import { nanoid } from 'nanoid';

export default class Image {
    buffer: Buffer;
    size: number;
    mimetype: string;
    id: string;
    createdAt: number;
    path: string;

    constructor(
        mimetype: string,
        size: number,
        path: string,
        id?: string,
        createdAt?: number
    ) {
        this.path = path;
        this.mimetype = mimetype;
        this.size = size;
        this.id = id || nanoid();
        this.createdAt = createdAt || Date.now();

        const img = fs.readFileSync(path);
        const encodeImage = img.toString('base64');

        this.buffer = new Buffer(encodeImage, 'base64');
    }

    toPublicJSON() {
        return {
            size: this.size,
            mimetype: this.mimetype,
            id: this.id,
            createdAt: this.createdAt,
            path: this.path,
        };
    }

    toJSON() {
        return {
            buffer: this.buffer,
            size: this.size,
            mimetype: this.mimetype,
            id: this.id,
            createdAt: this.createdAt,
            path: this.path,
        };
    }
}
