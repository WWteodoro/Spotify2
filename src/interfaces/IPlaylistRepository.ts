import { IPlaylist } from "./playlistInterface";

export interface IPlaylistRepository{
    findAll(): Promise<IPlaylist[]>
    findOnePlaylist(id: string): Promise<IPlaylist>
    insert(props: IPlaylist): Promise<void>
    findPlaylistByName(name: string): Promise<IPlaylist[]>
    update(props: IPlaylist, id: string): Promise<void>
    delete(id: string): Promise<void>
}