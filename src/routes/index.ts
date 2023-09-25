import express from 'express';
import { mainRouter } from './mainRoute';
import { musicRoute } from './musicRoutes';

export const route = express.Router();

route.use('/', mainRouter);
route.use('/music', musicRoute);
