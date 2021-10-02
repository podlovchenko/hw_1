import express from 'express';

import { PORT } from './config';
import setupMiddlewares from './middlewares';
import { apiRouter } from './routers';

const port = process.env.PORT || PORT;
const app = express();

setupMiddlewares(app);

app.use('/', apiRouter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
