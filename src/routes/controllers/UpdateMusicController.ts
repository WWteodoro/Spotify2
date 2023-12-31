import { Request, Response } from "express";
import { IMusicRepository } from "../../interfaces/musicInterfaces";
import { UpdateMusicService } from "../../services/UpdateMusicService";

export class UpdateMusicController {
    constructor(private musicRepo: IMusicRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, author, album, name } = req.body;

        const updateMusicService = new UpdateMusicService(this.musicRepo);
        let response = await updateMusicService.execute({ id, author, album, name });

        return res.status(200).json(response);
    }
}