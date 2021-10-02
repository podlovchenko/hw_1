import fs from 'fs';
import { nanoid } from 'nanoid';

export default class Image {
    buffer: Buffer;
    size: number;
    mimeType: string;
    id: string;
    uploadedAt: number;
    path: string;

    constructor(
        mimeType: string,
        size: number,
        path: string,
        id?: string,
        uploadedAt?: number
    ) {
        this.path = path;
        this.mimeType = mimeType;
        this.size = size;
        this.id = id || nanoid();
        this.uploadedAt = uploadedAt || Date.now();

        const img = fs.readFileSync(path);
        const encodeImage = img.toString('base64');

        this.buffer = new Buffer(encodeImage, 'base64');
    }

    toPublicJSON() {
        return {
            size: this.size,
            mimeType: this.mimeType,
            id: this.id,
            uploadedAt: this.uploadedAt,
            path: this.path,
        };
    }

    toJSON() {
        return {
            buffer: this.buffer,
            size: this.size,
            mimeType: this.mimeType,
            id: this.id,
            uploadedAt: this.uploadedAt,
            path: this.path,
        };
    }
}
