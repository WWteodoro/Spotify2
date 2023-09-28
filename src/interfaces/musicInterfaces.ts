export interface IMusic {
    id: string;
    author: string;
    album: string;
    name: string;
}

export interface IMusicRepository {
    create(input: IMusic): Promise<void>;
    read(id: string): Promise<IMusic | undefined>;
    update(input: IMusic): Promise<void>;
    delete(id: string): Promise<void>;
}

export interface ICreateMusicInput {
    author: string;
    album: string;
    name: string;
}

export interface ICreateMusicOutput {
    id: string;
    author: string;
    album: string;
    name: string;
}

export interface IReadMusicInput {
    id: string;
}

export interface IReadMusicOutput extends IMusic {
    
}

export interface IUpdateMusicInput extends IMusic {

}

export interface IDeleteMusicInput {
    id: string;
}