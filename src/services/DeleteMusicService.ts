import { IDeleteMusicInput, IMusicRepository } from "../interfaces/musicInterfaces";

export class DeleteMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: IDeleteMusicInput) {
        await this.musicRepo.delete(input.id);
    }
}