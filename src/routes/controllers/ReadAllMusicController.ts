import { Request, Response } from "express";
import { IMusicRepository } from "../../interfaces/musicInterfaces";
import { ReadAllMusicService } from "../../services/ReadAllMusicService";

export class ReadAllMusicController {
    constructor(private musicRepo: IMusicRepository) { }

    async handle(_: Request, res: Response): Promise<Response> {
        const readAllMusicService = new ReadAllMusicService(this.musicRepo);
        const response = await readAllMusicService.execute();

        return res.status(200).json(response);
    }
}