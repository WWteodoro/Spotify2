import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylist, IPlaylistCreateRequest, IPlaylistGetRequest } from "../interfaces/playlistInterface"


export class GetPlaylistService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute({id} : IPlaylistGetRequest): Promise<IPlaylist>{
        const result = await this.playlistRepo.findOnePlaylist(id)
        return result
    }
}