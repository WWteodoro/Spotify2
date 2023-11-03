import { NextFunction, Request, Response, Router, response } from "express";
import { IPlaylist } from "../interfaces/playlistInterface";
import { createUUID } from "../utils/createUUID";
import { validatePlaylistDescription } from "../utils/validate";
import { Playlist } from "../entities/playlist";
import { PlaylistRepository } from "../repositories/PlaylistRepository";
import { CreatePlaylistController } from "./controllers/CreatePlaylistController";
import { GetPlaylistController } from "./controllers/GetPlaylistController";
import { ListPlaylistsController } from "./controllers/ListPlaylistsController";
import { UpdatePlaylistController } from "./controllers/UpdatePlaylistController";
import { DeletePlaylistController } from "./controllers/DeletePlaylistController";
import { GetPlaylistByNameController } from "./controllers/GetPlaylistByNameController"
import { resolveController } from "../adapters/resolverController";

const playlists: IPlaylist[] = [];
export const playlistRoute = Router();

const playlistRepo = new PlaylistRepository()
const createPlaylistController = new CreatePlaylistController(playlistRepo)
const getPlaylistController = new GetPlaylistController(playlistRepo)
const listPlaylistsController = new ListPlaylistsController(playlistRepo)
const updatePlaylistController = new UpdatePlaylistController(playlistRepo)
const deletePlaylistController = new DeletePlaylistController(playlistRepo)
const getPlaylistByNameController = new GetPlaylistByNameController(playlistRepo)

//Criar Playlist
playlistRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createPlaylistController.handle(req,res)
}))


//Pegar uma playlist por ID
playlistRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getPlaylistController.handle(req,res)
}))

//Pegar uma playlist por nome
playlistRoute.get('/:name', resolveController(async(req: Request, res: Response) => {
    return await getPlaylistByNameController.handle(req,res)
}))

//Listar Playlists
playlistRoute.get('/', resolveController(async(_: Request, res: Response) => {
    return await listPlaylistsController.handle(_,res)
}))

//Atualizar
playlistRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updatePlaylistController.handle(req,res)
}))

//Exclusão
playlistRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deletePlaylistController.handle(req,res)
}))
