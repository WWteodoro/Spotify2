import { IMusic, IMusicRepository } from "../interfaces/musicInterfaces";

export class ReadAllMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(): Promise<IMusic[]> {
        return await this.musicRepo.readAll();
    }
}