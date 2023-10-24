import { IPlaylist } from "../interfaces/playlistInterface";
import { createUUID } from "../utils/createUUID";

export class Playlist{
    id: string;
    name: IPlaylist['name'];
    author:IPlaylist['author'];
    description:IPlaylist['description'];
    createdAt: IPlaylist['createdAt'];
    updateAt: IPlaylist['updatedAt'];
    

    constructor(props: Omit<IPlaylist, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.author = props.author;
        this.description = props.description;
        this.createdAt = props.createdAt || new Date();
        this.updateAt = new Date();
        
    }

    toJSON(): IPlaylist {
        return{
            id: this.id,
            name: this.name,
            author: this.author,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updateAt
        }
    }
}