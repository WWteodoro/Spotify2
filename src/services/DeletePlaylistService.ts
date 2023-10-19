import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylist, IPlaylistCreateRequest, IPlaylistGetRequest } from "../interfaces/playlistInterface"


export class DeletePlaylistService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute({id} : IPlaylistGetRequest): Promise<void>{
        await this.playlistRepo.findOnePlaylist(id)
        await this.playlistRepo.delete(id)
    }
}