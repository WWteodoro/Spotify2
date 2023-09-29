import express from "express";
import { mainRouter } from "./mainRoute";
import { userRoute } from "./userRoute";
import { musicRoute } from './musicRoutes';
import { authRoute } from "./authRoute";

export const route = express.Router();

route.use(express.json());
route.use('/', mainRouter);
route.use('/auth', authRoute);
route.use('/users', userRoute);
route.use('/music', musicRoute);


