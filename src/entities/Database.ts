import Image from './Image';

class Database {
    private idToImage: Record<string, Image> = {};

    add(imageFile: Image) {
        this.idToImage[imageFile.id] = imageFile;
    }

    remove(id: string) {
        delete this.idToImage[id];
    }

    get(id: string) {
        return this.idToImage[id];
    }

    getAll() {
        return Object.values(this.idToImage)
            .map((image) => image.toPublicJSON())
            .sort((imageA, imageB) => imageB.uploadedAt - imageA.uploadedAt);
    }
}

export default new Database();
