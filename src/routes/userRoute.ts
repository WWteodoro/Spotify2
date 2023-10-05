import { Request, Response, Router, response } from "express";
import { IUser } from "../interfaces/userInterfaces";
import { isFuture } from 'date-fns'
import { createUUID } from "../utils/createUUID";

const users: IUser[] = [];
export const userRoute = Router();

//criar 
userRoute.post('/', (req: Request, res: Response) => {
    const { id, name, email, password, confirmPassword, confirmEmail, birthdate} = req.body;

    if (email.indexOf('.') === -1 || email.indexOf('@') === -1){
        res.status(400).json({
            message: "Email inválido"
        })
    }

    let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
     
    if(!regexPassword.test(password)){
        res.status(400).json({
            message: "A senha não atende os requisitos"
        })
    }

    if(isFuture(new Date(birthdate))){
        res.status(400).json({
            message: "KKKK veio do futuro??"
        });
    }

    if(email != confirmEmail){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    if(password != confirmPassword){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    const user = { 
        id: createUUID(), 
        name, 
        email, 
        password, 
        confirmPassword, 
        confirmEmail, 
        birthdate }
    users.push(user)
    
    res.json(user)
})

//Pegar um único usuário
userRoute.get('/:id', (req: Request, res:Response) => {
    const { id } = req.params;

    const result = users.filter(user => {
       if(user.id === id) {
        return user
       }
    } )

    res.json(result)
})

//Listar
userRoute.get('/', (_, res: Response) => {
    res.json(users)
})
