import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { CreatePlaylistService } from "../../services/CreatePlaylistService";

export class CreatePlaylistController {
    constructor(private playlistRepo: IPlaylistRepository) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, author, description } = req.body;

        const createPlaylistService = new CreatePlaylistService(this.playlistRepo)
        await createPlaylistService.execute({ name, author, description })

        return res.status(200).json({})
    }
}

