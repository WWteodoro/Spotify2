export interface IPlaylist {
    id: string;
    name: string;
    author: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPlaylistCreateRequest {
    name: string;
    author: string;
    description: string
}

export interface IPlaylistGetRequest {
    id: string
}

export interface IPlaylistUpdateRequest{
    id: string;
    name: string;
    author: string;
    description: string
}

export interface IPlaylistDeleteRequest{
    id: string
}

export interface IPlaylistGetByNameRequest{
    name: string
}