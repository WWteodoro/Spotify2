import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { DeletePlaylistService } from "../../services/DeletePlaylistService";

export class DeletePlaylistController{
    constructor(private playlistRepo: IPlaylistRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
    
        const deletePlaylistService = new DeletePlaylistService(this.playlistRepo)
        await deletePlaylistService.execute({ id })
    
        return res.status(200)
    }
}

