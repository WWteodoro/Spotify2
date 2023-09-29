import { IJWTPayload, IJWTRepository } from "../interfaces/IJWTRepository";
import { sign, verify } from "jsonwebtoken" 

require("dotenv").config({ path: ".env.example"})

export class JWTRepository implements IJWTRepository {
    generate(payload: IJWTPayload, secret: string, expires: string): string {
        return sign(payload, secret, { 
            expiresIn: expires
        })
    }  

    verify(key: string): IJWTPayload {
        return verify(key, process.env.JWT_SECRET!) as IJWTPayload;
    }
}