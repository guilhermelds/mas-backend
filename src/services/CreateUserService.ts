import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../model/User";


interface IUserData {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({name,email,password}:IUserData) {
        const usersRepository = getRepository(User)
        const checkUserExists = await usersRepository.findOne({email})
        if (checkUserExists) {
            throw new Error("Email já existe") 
        }
        const hashedPassword = await hash(password,8)
        const user = usersRepository.create({
            name,
            email,
            password:hashedPassword
        })
        await usersRepository.save(user)

        return user;
    }
}

export {CreateUserService}