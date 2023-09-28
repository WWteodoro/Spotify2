import { IMusic } from "../interfaces/IMusicInterfaces";
import { createUUID } from "../utils/createUUID";

export class Music {
    private readonly id: IMusic["id"];
    private _author: IMusic["author"];
    private _album: IMusic["album"];
    private _name: IMusic["name"];
    createdAt: IMusic['createdAt'];
    updatedAt: IMusic['updatedAt'];

    private constructor(author: string, album: string, name: string, id?: string, createdAt?: Date)  {
        this.id = id || createUUID();
        this._author = author;
        this._album = album;
        this._name = name;
        this.createdAt = createdAt || new Date();
        this.updatedAt = new Date();
    }   
    
    static create(author: string, album: string, name: string, id?: string): Music {
        return this.constructor(author, album, name, id!);
    }

    //Author getter and setter
    public set author(input: IMusic["author"]) {
        this._author = input;
    }

    public get author(): IMusic["author"] {
        return this._author
    }

    //Album getter and setter
    public set album(input: IMusic["album"]) {
        this._album = input;
    }
    
    public get album(): IMusic["album"] {
        return this._album;
    }

    //Name getter and setter
    public set name(input: IMusic["name"]) {
        this._name = input;
    }

    public get name(): IMusic["name"] {
        return this._name;
    }

    public toJSON(): IMusic {
        return {
            id: this.id,
            author: this._author,
            album: this._album,
            name: this._name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}