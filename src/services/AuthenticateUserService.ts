import { AppError } from "../errors/AppError";
import { IHashRepository } from "../interfaces/IHashRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";
import { IUserAuthenticateRequest } from "../interfaces/userInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository"; 

export class AuthenticateUserService {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository, 
        private hashRepo: IHashRepository
    ) { }
    
    async execute({email, password}: IUserAuthenticateRequest): Promise<Object | void> {
        const user = await this.userRepo.findByEmail(email);
        
        if(user) {
            const res = await this.hashRepo.uncryptographie(password, user.password)
            
            if(res) {
                const token = this.jwtRepo.generate({ email: user.email!, id: user.id })

                return { user, token }

            } else throw new AppError("Incorrect password");

        } else throw new AppError("This user doesn't exists");
    }
}