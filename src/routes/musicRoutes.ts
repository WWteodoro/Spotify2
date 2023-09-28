import { Request, Response, Router } from "express";
import { IMusicRepository } from "../interfaces/musicInterfaces";
import { CreateMusicController } from "./controllers/CreateMusicController";
import { ReadMusicController } from "./controllers/ReadMusicController";
import { UpdateMusicController } from "./controllers/UpdateMusicController";
import { DeleteMusicController } from "./controllers/DeleteMusicController";
import { FakeMusicRepo } from "../repositories/FakeMusicRepo";
import { resolveController } from "../adapters/resolverController";

export const musicRoute = Router();

const musicRepo: IMusicRepository = new FakeMusicRepo();

const createMusicController = new CreateMusicController(musicRepo);
const readMusicController   = new ReadMusicController(musicRepo);
const updateMusicController = new UpdateMusicController(musicRepo);
const deleteMusicControlelr = new DeleteMusicController(musicRepo);

musicRoute.post('/', resolveController(async (req: Request, res: Response) => {
    await createMusicController.handle(req, res);
}))

musicRoute.get('/:id', resolveController(async (req: Request, res: Response) => {
    await readMusicController.handle(req, res);
}))

musicRoute.put('/', resolveController(async (req: Request, res: Response) => {
    await updateMusicController.handle(req, res);
}))

musicRoute.delete('/:id', resolveController(async (req: Request, res: Response) =>{
    await deleteMusicControlelr.handle(req, res);
}))