import { Request, Response } from "express";
import { IMusicRepository } from "../../interfaces/musicInterfaces";
import { CreateMusicService } from "../../services/CreateMusicService";

export class CreateMusicController {
    constructor(private musicRepo: IMusicRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { author, album, name } = req.body;

        const createMusicService = new CreateMusicService(this.musicRepo);
        await createMusicService.execute({ author, album, name });

        return res.status(201).send();
    }
}