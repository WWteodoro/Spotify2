import { Request, Response } from "express"
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UpdateUsersService } from "../../services/UpdateUserService";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class UpdateUserController {
constructor(
    private userRepo: IUserRepository,
    private hashRepo: IHashRepository
){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name, email, password, confirmEmail, confirmPassword } = req.body;
    
        const updateUserService = new UpdateUsersService(this.userRepo, this.hashRepo)
        let response = await updateUserService.execute({ id, name, email, password, confirmEmail, confirmPassword})
    
        return res.status(201).json(response);
    }
}