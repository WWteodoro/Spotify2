import { IMusicRepository, IUpdateMusicInput } from "../interfaces/IMusicInterfaces";

export class UpdateMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: IUpdateMusicInput): Promise<void> {
        await this.musicRepo.update(input);
    }
}