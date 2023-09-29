import { IUser } from "../interfaces/IUserInterfaces";
import { createUUID } from "../utils/createUUID";

export class User {
    id: IUser['id'];
    name: IUser['name'];
    email: IUser['email'];
    password: IUser['password'];
    createdAt: IUser['createdAt'];
    updatedAt: IUser['updatedAt'];

    private constructor(name: IUser['name'], email: IUser['email'], password: IUser['password'], createdAt?: IUser['createdAt'], id?:string) {
        this.id = id || createUUID();
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt || new Date();
        this.updatedAt = new Date();
    }

    static create(name: IUser['name'], email: IUser['email'], password: IUser['password'], createdAt?: IUser['createdAt'], id?: string) {
        return new User(name, email, password, createdAt, id);
    }

    toJson(): IUser{
        return{
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt
        }
    }
}