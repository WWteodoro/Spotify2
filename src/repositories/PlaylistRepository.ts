import { IPlaylistRepository } from "../interfaces/IPlaylistRepository";
import { IPlaylist } from "../interfaces/playlistInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PlaylistRepository implements IPlaylistRepository{
    async findAll(): Promise<IPlaylist[]> {
        const result = await prisma.playlist.findMany()
        return result;
    }

    async insert(props: IPlaylist): Promise<void>{
        await prisma.playlist.create({
            data: props
        })
    }

    async findOnePlaylist(id: string): Promise<IPlaylist>{
        const result = await prisma.playlist.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Playlist not found')
        return result
    }

    async findPlaylistByName(name: string): Promise<IPlaylist[]> {
        const result = await prisma.playlist.findMany({
            where: {name}
        })

        if(!result) throw new Error('Playlist not found')
        return result

    }

    async update(props: IPlaylist, id: string): Promise<void> {
        await prisma.playlist.update({
            where: { id }, 
            data: props
        })
    }

    async delete(id: string): Promise<void>{
        await prisma.playlist.delete({
            where: { id }
        })
    }
    
}