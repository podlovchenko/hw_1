import express from 'express';

import { PORT } from './config';
import setupMiddlewares from './middlewares';
import { apiRouter } from './routers';

const app = express();

setupMiddlewares(app);

app.use('/', apiRouter);

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
});
