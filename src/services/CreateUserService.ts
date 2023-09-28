import { User } from "../entities/user"
import { AppError } from "../errors/AppError"
import { IHashRepository } from "../interfaces/IHashRepository"
import { IUserCreateRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"
import { validateEmail, validatePassword } from "../utils/validate"

export class CreateUserService{
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository){

    }
    async execute({ name, email, password, confirmEmail, confirmPassword}: IUserCreateRequest): Promise<void> {
        if (!validateEmail(email)){
           throw new AppError('Email ou senha inválidos')
        }
    
        if(!validatePassword(password)){
            throw new AppError('Email ou senha inválidos')
        }

        password = await this.hashRepo.cryptographie(password);
    
        const user = new User({name, email, password, confirmEmail, confirmPassword})
        await this.userRepo.insert(user.toJson())
    }
}