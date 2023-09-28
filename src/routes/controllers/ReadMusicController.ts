import { Request, Response } from "express";
import { IMusicRepository } from "../../interfaces/IMusicInterfaces";
import { ReadMusicService } from "../../services/ReadMusicService";

export class ReadMusicController {
    constructor(private musicRepo: IMusicRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const readMusicService = new ReadMusicService(this.musicRepo);
        const response = await readMusicService.execute({ id });

        return res.status(200).json(response).send();
    }
}