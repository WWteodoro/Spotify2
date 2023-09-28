import { Request, Response } from "express"
import { validateEmail, validatePassword } from "../../utils/validate";
import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { CreateUserService } from "../../services/CreateUserService";

export class CreateUserController {
constructor(private userRepo: IUserRepository){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password, confirmEmail, confirmPassword} = req.body;

        const createUserService = new CreateUserService(this.userRepo)
        createUserService.execute({ name, email, password, confirmEmail, confirmPassword })
        
        res.status(201).send()
        return res.status(201).send()
    }
}