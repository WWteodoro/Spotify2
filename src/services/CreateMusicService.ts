import { Music } from "../entities/Music.entity";
import { ICreateMusicInput, ICreateMusicOutput, IMusicRepository } from "../interfaces/musicInterfaces";

export class CreateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: ICreateMusicInput): Promise<ICreateMusicOutput> {
        const music = Music.create(input.author, input.album, input.name);
        let response = music.toJSON()

        await this.musicRepo.create(response);
        return response;
    }
}
