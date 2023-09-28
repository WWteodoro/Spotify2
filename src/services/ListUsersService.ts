import { IUser, IUserGetRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"


export class ListUsersService{
    constructor(private userRepo: IUserRepository){

    }
    async execute(): Promise<IUser[]> {
        const result = await this.userRepo.findAll()
        return result
    }
}