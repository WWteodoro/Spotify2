import { Music } from "../entities/Music.entity";
import { ICreateMusicInput, IMusicRepository } from "../interfaces/musicInterfaces";

export class CreateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: ICreateMusicInput): Promise<void> {
        let music = Music.create(input.author, input.album, input.name);

        await this.musicRepo.create(music.toJSON());
    }
}