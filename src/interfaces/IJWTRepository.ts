export interface IJWTPayload {
    id: string;
    email: string;
}

export interface IJWTRepository {
    generate(payload: IJWTPayload, secret: string, expires: string): string;
    verify(key: string): IJWTPayload;
}