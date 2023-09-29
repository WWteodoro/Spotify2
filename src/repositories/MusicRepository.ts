import { AppError } from "../errors/AppError";
import { IMusic, IMusicRepository } from "../interfaces/musicInterfaces";
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient();

export class MusicRepository implements IMusicRepository {
    async create(input: IMusic): Promise<void> {
        await prisma.music.create({
            data: input
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.music.delete({
            where: { id }
        })
    }

    async update(input: IMusic): Promise<void> {
        let id = input.id

        await prisma.music.update({
            where: { id },
            data: input
        })
    }

    async read(id: string): Promise<IMusic> {
        const result = await prisma.music.findUnique({
            where: { id }
        })

        if(!result) throw new AppError('User not found', 404);
        return result;
    }

    async readAll(): Promise<IMusic[]> {
        return await prisma.music.findMany()
    }
}