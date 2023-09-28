export interface IUser {
    id: string;
    email: string;
    password: string;
}

export interface IUserAuthenticateRequest {
    email    : string;
    password : string;
}
