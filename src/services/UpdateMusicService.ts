import { IMusicRepository, IUpdateMusicInput } from "../interfaces/musicInterfaces";
import { Music } from "../entities/Music.entity";

export class UpdateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: IUpdateMusicInput): Promise<void> {
        let { id, author, album, name } = input;
        let music = Music.create(author, album, name, id);

        await this.musicRepo.update(music.toJSON());
    }
}