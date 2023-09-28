import express from 'express';
import { route } from './routes';

require('dotenv').config({path: '.env'});

const app = express();

app.use('/', route);

app.listen(Number(process.env.PORT), () => {
    console.log('Backend rodando...')
})