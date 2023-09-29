import auth from "../config/auth";
import { addDays } from "date-fns";
import { AppError } from "../errors/AppError";
import { HttpError } from "../errors/HttpError";
import { IHashRepository } from "../interfaces/IHashRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";
import { IAuthenticateResponse, IUserAuthenticateRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository"; 

export class AuthenticateUserService {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository, 
        private hashRepo: IHashRepository
    ) { }
    
    async execute({email, password}: IUserAuthenticateRequest): Promise<IAuthenticateResponse> {
        const user = await this.userRepo.findByEmail(email);

        if(user) {
            const { expires_in_refresh_token, expires_in_token, secret_refresh_token, secret_token } = auth.jwt;
            const res = await this.hashRepo.uncryptographie(password, user.password)
            
            if(res) {
                const token = this.jwtRepo.generate({ email: user.email!, id: user.id }, secret_token!, expires_in_token!);
                const refresh = this.jwtRepo.generate({ email: user.email!, id: user.id }, secret_refresh_token!, expires_in_refresh_token!);

                return { 
                    user: {
                        ...user,
                        password: ''
                    },
                    token, 
                    refreshToken: refresh
                 }

            } else throw new AppError("Incorrect password", HttpError.UNAUTHORIZED);

        } else throw new AppError("This user doesn't exists", HttpError.UNAUTHORIZED);
    }
}