import { User } from "../entities/User.entity"
import { AppError } from "../errors/AppError"
import { IHashRepository } from "../interfaces/IHashRepository"
import { ICreateUserResponse, IUserCreateRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"
import { validateEmail, validatePassword } from "../utils/validate"

export class CreateUserService{
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository) { }
    
    async execute({ name, email, password, confirmEmail, confirmPassword }: IUserCreateRequest): Promise<ICreateUserResponse> {
        if(email != confirmEmail) {
            throw new AppError('Emails diferentes');
        }
        console.log("a")
        if(!validateEmail(email)){
           throw new AppError('Email ou senha inválidos')
        }
        console.log("b")
        if(!validatePassword(password)){
            throw new AppError('Email ou senha inválidos')
        }
        console.log("c")
        password = await this.hashRepo.cryptographie(password);
        confirmPassword = await this.hashRepo.cryptographie(confirmPassword);
        console.log("d")
        const user = User.create(name, email, password);
        console.log("e")
        let response = user.toJson();

        await this.userRepo.insert(response);
        return response;
    }
}