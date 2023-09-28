import { IUserRepository } from "../interfaces/IUserRepository";
import { IUser } from "../interfaces/userInterfaces";

export class UserRepository implements IUserRepository {
    async delete(id: string): Promise<void> {
        
    }

    async findAll(): Promise<IUser[]> {
        
    }

    async findByEmail(email: string): Promise<IUser | null> {
        
    }

    async findOneUser(id: string): Promise<IUser> {
        
    }

    async insert(props: IUser): Promise<IUser> {
        
    }

    async update(props: IUser, id: string): Promise<void> {
        
    }
}