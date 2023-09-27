import { IMusicRepository, IUpdateMusicInput } from "../interfaces/musicInterfaces";
import { Music } from "../entities/Music.entity";

export class UpdateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: IUpdateMusicInput): Promise<IUpdateMusicInput> {
        let { id, author, album, name } = input;
        let music = Music.create(author, album, name, id);
        let response = music.toJSON()

        await this.musicRepo.update(response);
        return response;
    }
}