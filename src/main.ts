import express, { NextFunction, Request, Response } from 'express';
import { route } from './routes';
import { PrismaClient } from '@prisma/client';
import { AppError } from './errors/AppError';
import { handleError } from './middlewares/handleError';

require('dotenv').config({ path: '.env'});

const prisma = new PrismaClient();
prisma.$connect()

//criando backend através do express
const app = express();

app.use(express.json())
//backend usa rota raiz
app.use(route);

app.use(handleError)

//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(process.env.PORT), () => {
    console.log('Rodando tá!!!')

})