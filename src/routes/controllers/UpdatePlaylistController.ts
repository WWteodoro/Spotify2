import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { IPlaylist } from "../../interfaces/playlistInterface";
import { UpdatePlaylistService } from "../../services/UpdatePlaylistService";

export class UpdatePlaylistController{
    constructor(private playlistRepo: IPlaylistRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
    const { name, author, description}: IPlaylist = req.body;

    const updatePlaylistService = new UpdatePlaylistService(this.playlistRepo)
    await updatePlaylistService.execute({ id, name, author, description})

    return res.status(201).json()
    }
}

