import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylist, IPlaylistCreateRequest, IPlaylistGetRequest } from "../interfaces/playlistInterface"


export class ListPlaylistsService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute(): Promise<IPlaylist[]>{
        const playlists = await this.playlistRepo.findAll()
        return playlists
    }
}