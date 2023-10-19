import { Playlist } from "../entities/playlist"
import { AppError } from "../errors/AppError"
import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylist, IPlaylistCreateRequest, IPlaylistGetRequest, IPlaylistUpdateRequest } from "../interfaces/playlistInterface"
import { validatePlaylistDescription } from "../utils/validate"


export class UpdatePlaylistService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute({id, name, author, description} : IPlaylistUpdateRequest): Promise<void>{
        const result = await this.playlistRepo.findOnePlaylist(id)

    if(description && !validatePlaylistDescription(description)){
        throw new AppError('Descrição excessivamente grande')
    }

    const playlist = new Playlist({
        name: name || result.name, 
        author: author,
        description: description || result.description
    }, result.id)

    await this.playlistRepo.update(playlist.toJSON(), id)
    }
}