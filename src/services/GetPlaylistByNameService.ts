import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylist, IPlaylistGetByNameRequest} from "../interfaces/playlistInterface"


export class GetPlaylistByNameService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute({name} : IPlaylistGetByNameRequest): Promise<IPlaylist[]>{
        const result = await this.playlistRepo.findPlaylistByName(name)
        return result
    }
}