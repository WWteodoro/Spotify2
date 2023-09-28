import express, { Request, Response } from "express";

export const mainRouter = express.Router();

//Get
mainRouter.get('/', (_: Request, res: Response) => {
    res.json({
        title: "Node Express API with Typescript"
    })
})
