import { User } from "../entities/user"
import { AppError } from "../errors/AppError"
import { IUser, IUserGetRequest, IUserUpdateRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"
import { validateEmail, validatePassword } from "../utils/validate"


export class UpdateUsersService{
    constructor(private userRepo: IUserRepository){

    }
    async execute({ id, name, email, password, confirmEmail, confirmPassword}: IUserUpdateRequest): Promise<void> {
        const result = await this.userRepo.findOneUser(id)
    
    
        if( email && !validateEmail(email)){
            throw new AppError('Email ou senha inválidos')
        }
    
        if( password && !validatePassword(password)){
           throw new AppError('Email ou senha inválidos')
        }
    
        const user = new User({
            name: name || result.name,
            email: email || result.email,
            password: password || result.password,
            confirmEmail: email || result.email,
            confirmPassword: password || result.password
        }, result.id)
    
        await this.userRepo.update(user.toJson(), id)
    }
}