import { IMusic, IMusicRepository } from "../interfaces/IMusicInterfaces";

export class FakeMusicRepo implements IMusicRepository {
    private musics: IMusic[] = [];

    async create(input: IMusic): Promise<void> {
        this.musics.push(input);
    }

    async read(): Promise<IMusic | undefined> {
        return this.musics[0];
    }

    async delete(): Promise<void> {
        
    }

    async update(): Promise<void> {
        
    }
}