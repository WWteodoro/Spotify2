import { IPlaylist } from "../interfaces/playlistInterface";
import { createUUID } from "../utils/createUUID";

export class Playlist{
    id: string;
    name: IPlaylist['name'];
    author:IPlaylist['author'];
    description:IPlaylist['description'];
    

    constructor(props: Omit<IPlaylist, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.author = props.author;
        this.description = props.description;
        
    }

    toJSON(): IPlaylist {
        return{
            id: this.id,
            name: this.name,
            author: this.author,
            description: this.description
        }
    }
}