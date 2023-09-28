import { IMusic } from "../interfaces/musicInterfaces";
import { createUUID } from "../utils/createUUID";

export class Music {
    private readonly _id: IMusic["id"];
    private _author: IMusic["author"];
    private _album: IMusic["album"];
    private _name: IMusic["name"];
    
    private constructor(author: IMusic["author"], album: IMusic["album"], name: IMusic["name"], id?: IMusic["id"]) {
        this._id = id || createUUID();
        this._author = author;
        this._album = album;
        this._name = name;
    }   

    static create(author: IMusic["author"], album: IMusic["album"], name: IMusic["name"], id?: IMusic["id"]): Music {
        return new Music(author, album, name, id!);
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
            id: this._id,
            author: this._author,
            album: this._album,
            name: this._name
        }
    }
}
