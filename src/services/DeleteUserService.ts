import { IUserGetRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"


export class DeleteUserService{
    constructor(private userRepo: IUserRepository){}
    async execute({ id }: IUserGetRequest): Promise<void> {
        await this.userRepo.findOneUser(id)
        await this.userRepo.delete(id)
    }
}