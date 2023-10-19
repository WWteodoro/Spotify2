import { Playlist } from "../entities/playlist"
import { AppError } from "../errors/AppError"
import { IPlaylistRepository } from "../interfaces/IPlaylistRepository"
import { IPlaylistCreateRequest } from "../interfaces/playlistInterface"
import { validatePlaylistDescription } from "../utils/validate"

export class CreatePlaylistService {
    constructor(private playlistRepo: IPlaylistRepository){}
    async execute({name, author, description} : IPlaylistCreateRequest): Promise<void>{
        if(!validatePlaylistDescription(description)){
           throw new AppError('Descrição excessivamente grande')
        }
    
        const playlist = new Playlist({name, author, description})
        await  this.playlistRepo.insert(playlist.toJSON())
    }
}