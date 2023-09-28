import { Request, Response, Router, response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

export const userRoute = Router();

const userRepo = new UserRepository()
const createUserController = new CreateUserController(userRepo)
const getUserController = new GetUserController(userRepo)
const listUsersController = new ListUsersController(userRepo)
const updateUserController = new UpdateUserController(userRepo)
const deleteUserController = new DeleteUserController(userRepo)

//criar 
userRoute.post('/', async(req: Request, res: Response) => {
    return await createUserController.handle(req, res)
})

//Pegar um único usuário
userRoute.get('/:id', async(req: Request, res: Response) => {
    return await getUserController.handle(req, res)
})

//Listar
userRoute.get('/', async (_, res: Response) => {
    return await listUsersController.handle(_, res)
})

//Atualizar
userRoute.put('/:id', async (req: Request, res:Response) => {
   return await updateUserController.handle(req, res)

})

//Exclusão
userRoute.delete('/:id', async (req: Request, res: Response) => {
    return await deleteUserController.handle(req, res)
})


