import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { GetPlaylistService } from "../../services/GetPlaylistService";

export class GetPlaylistController{
    constructor(private playlistRepo: IPlaylistRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

   const getPlaylistService = new GetPlaylistService(this.playlistRepo)
   const result = await getPlaylistService.execute({ id })

    return res.json(result)
    }
}

