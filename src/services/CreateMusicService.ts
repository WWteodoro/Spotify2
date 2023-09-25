import { ICreateMusicInput, IMusicRepository } from "../interfaces/musicInterfaces";
import { createUUID } from "../utils/createUUID";

export class CreateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: ICreateMusicInput): Promise<void> {
        await this.musicRepo.create({ id: createUUID(), ...input });
    }
}