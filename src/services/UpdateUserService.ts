import { User } from "../entities/User.entity"
import { AppError } from "../errors/AppError"
import { IUser, IUserGetRequest, IUserUpdateRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"
import { validateEmail, validatePassword } from "../utils/validate"


export class UpdateUsersService{
    constructor(private userRepo: IUserRepository){ }
    async execute({ id, name, email, password, confirmEmail, confirmPassword}: IUserUpdateRequest): Promise<IUser> {
        if(password != confirmPassword) throw new AppError('Senhas diferentes');
        if(email != confirmEmail) throw new AppError('Emails diferentes');

        if( email && !validateEmail(email)){
            throw new AppError('Email ou senha inválidos')
        }
    
        if( password && !validatePassword(password)){
           throw new AppError('Email ou senha inválidos')
        }
    
        const user = User.create(name, email, password, undefined, id);

        let response = user.toJson()
    
        await this.userRepo.update(response, id)

        return response;
    }
}