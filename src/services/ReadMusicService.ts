import { IMusicRepository, IReadMusicInput, IReadMusicOutput } from "../interfaces/IMusicInterfaces";

export class ReadMusicService {
    constructor(private musicRepo: IMusicRepository) { }

    async execute(input: IReadMusicInput): Promise<IReadMusicOutput | undefined> {
        return await this.musicRepo.read(input.id);
    }
}