import { Request, Response } from "express"
import { validateEmail, validatePassword } from "../../utils/validate";
import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser } from "../../interfaces/IUserInterfaces";
import { UpdateUsersService } from "../../services/UpdateUserService";

export class UpdateUserController {
constructor(private userRepo: IUserRepository){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const {name, email, password, confirmEmail, confirmPassword}: IUser = req.body;
    
       const updateUserService = new UpdateUsersService(this.userRepo)
       await updateUserService.execute({ id, name, email, password, confirmEmail: email, confirmPassword : password})
    
        return res.status(201).json();
    }
}