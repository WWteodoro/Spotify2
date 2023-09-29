import { Request, Response, Router } from "express";
import { IMusicRepository } from "../interfaces/musicInterfaces";
import { CreateMusicController } from "./controllers/CreateMusicController";
import { ReadMusicController } from "./controllers/ReadMusicController";
import { UpdateMusicController } from "./controllers/UpdateMusicController";
import { DeleteMusicController } from "./controllers/DeleteMusicController";
import { ReadAllMusicController } from "./controllers/ReadAllMusicController";
import { resolveController } from "../adapters/resolverController";
import { MusicRepository } from "../repositories/MusicRepository";

export const musicRoute = Router();

const musicRepo: IMusicRepository = new MusicRepository();

const createMusicController = new CreateMusicController(musicRepo);
const readMusicController   = new ReadMusicController(musicRepo);
const readAllMusicController = new ReadAllMusicController(musicRepo);
const updateMusicController = new UpdateMusicController(musicRepo);
const deleteMusicControlelr = new DeleteMusicController(musicRepo);

musicRoute.post('/', resolveController(async (req: Request, res: Response) => {
    await createMusicController.handle(req, res);
}))

musicRoute.get('/:id', resolveController(async (req: Request, res: Response) => {
    await readMusicController.handle(req, res);
}))

musicRoute.get('/', resolveController(async (_: Request, res: Response) => {
    await readAllMusicController.handle(_, res);
}))

musicRoute.put('/', resolveController(async (req: Request, res: Response) => {
    await updateMusicController.handle(req, res);
}))

musicRoute.delete('/:id', resolveController(async (req: Request, res: Response) =>{
    await deleteMusicControlelr.handle(req, res);
}))