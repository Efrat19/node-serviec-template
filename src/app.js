import express from 'express';
import 'babel-polyfill';
import './database/db';
import env from './env';
import routes from './routes';
import bodyParser from 'body-parser'
import authenticated from './middlewares/authenticated';
const log4js = require('log4js');
import morgan from 'morgan';

const logger = log4js.getLogger('node-service-template');
logger.level = 'debug';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/users', authenticated);

routes(app);

app.listen(env.API_PORT, () => {
    logger.debug(`server is listening on port ${env.API_PORT}!`);
});