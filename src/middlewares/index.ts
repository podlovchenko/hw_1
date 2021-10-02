import { Express } from 'express';
import bodyParser from 'body-parser';

import logger from './logger';

const middlewares = (app: Express) => {
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(logger);
};

export default middlewares;
