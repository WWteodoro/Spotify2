import { Request, Response, Router } from "express";
import { IMusicRepository } from "../interfaces/IMusicInterfaces";
import { CreateMusicController } from "./controllers/CreateMusicController";
import { ReadMusicController } from "./controllers/ReadMusicController";
import { UpdateMusicController } from "./controllers/UpdateMusicController";
import { DeleteMusicController } from "./controllers/DeleteMusicController";
import { FakeMusicRepo } from "../repositories/FakeMusicRepo";

export const musicRoute = Router();

const musicRepo: IMusicRepository = new FakeMusicRepo();

const createMusicController = new CreateMusicController(musicRepo);
const readMusicController   = new ReadMusicController(musicRepo);
const updateMusicController = new UpdateMusicController(musicRepo);
const deleteMusicControlelr = new DeleteMusicController(musicRepo);

musicRoute.post('/', async (req: Request, res: Response) => {
    await createMusicController.handle(req, res);
})

musicRoute.get('/:id', async (req: Request, res: Response) => {
    await readMusicController.handle(req, res);
})

musicRoute.post('/', async (req: Request, res: Response) => {
    await updateMusicController.handle(req, res);
})

musicRoute.post('/:id', async (req: Request, res: Response) => {
    await deleteMusicControlelr.handle(req, res);
})