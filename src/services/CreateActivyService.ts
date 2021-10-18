import { getRepository } from "typeorm";
import { Activy } from "../model/Activy";

interface IActivyData {
    name: string;
    activy_date: string;
    courseUnitId: string;
    grade: number
}

class CreateActivyService {

    public async execute({name,activy_date,courseUnitId,grade}:IActivyData) {
        const activysRepository = getRepository(Activy)
        const checkCtivyExists = await activysRepository.findOne({name,courseUnitId})
        if (checkCtivyExists) {
            throw new Error("Atividade já existe") 
        } 
        const activy = activysRepository.create({
            name,
            activy_date,
            courseUnitId,
            grade


        })
        await activysRepository.save(activy)
        return activy;
    }
}

export {CreateActivyService}