import { Request, Response } from "express";
import { IMusicRepository } from "../../interfaces/musicInterfaces";
import { DeleteMusicService } from "../../services/DeleteMusicService";

export class DeleteMusicController {
    constructor(private musicRepo: IMusicRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteMusicService = new DeleteMusicService(this.musicRepo);
        await deleteMusicService.execute({ id });

        return res.status(200).send();
    }
}