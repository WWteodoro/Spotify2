import { Request, Response } from "express";
import { IPlaylistRepository } from "../../interfaces/IPlaylistRepository";
import { GetPlaylistByNameService } from "../../services/GetPlaylistByNameService";


export class GetPlaylistByNameController{
    constructor(private playlistRepo: IPlaylistRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.params;

        const getPlaylistByNameService = new GetPlaylistByNameService(this.playlistRepo)
        const result = await getPlaylistByNameService.execute({ name })

    return res.json(result)
}

}

