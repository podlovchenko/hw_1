import fs from 'fs';
import util from 'util';

const unlinkFileAsync = util.promisify(fs.unlink);

export const removeFile = async (path: string) => {
    try {
        await unlinkFileAsync(path);
    } catch (err) {
        console.log(`removeFile error: file ${path} doesn't exist...`);
    }
};
