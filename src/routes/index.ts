import express from "express";
import { mainRouter } from "./mainRoute";
import { userRoute } from "./userRoute";

export const route = express.Router();

route.use('/', mainRouter)
route.use('/users', userRoute)