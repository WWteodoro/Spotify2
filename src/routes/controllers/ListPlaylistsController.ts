import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { ListPlaylistsService } from "../../services/ListPlaylistService";

export class ListPlaylistsController{
    constructor(private playlistRepo: IPlaylistRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const listPlaylistsService = new ListPlaylistsService(this.playlistRepo)
        const playlists = await listPlaylistsService.execute()
        return res.json(playlists)
    }
}

