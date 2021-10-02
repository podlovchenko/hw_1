import express from 'express';
import multerMiddleware from './middlewares/multer';
import {
    deleteImage,
    getImage,
    getList,
    merge,
    upload,
} from './controllers/api';

const apiRouter = express.Router();

apiRouter.post('/upload', multerMiddleware, upload);
apiRouter.get('/list', getList);
apiRouter.get('/image/:id', getImage);
apiRouter.delete('/image/:id', deleteImage);
apiRouter.get('/merge', merge);

export { apiRouter };
