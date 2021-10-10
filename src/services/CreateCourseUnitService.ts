import { getRepository } from "typeorm";
import { CourseUnit } from "../model/CourseUnit";

interface ICourseUnitData {
    name: string;
    description: string
}

class CreateCourseUnitService {

    public async execute({name,description}:ICourseUnitData) {
        const courseUnitsRepository = getRepository(CourseUnit)
        const checkCourseUnitExists = await courseUnitsRepository.findOne({name})
        if (checkCourseUnitExists) {
            throw new Error("Nome já existe") 
        } 
        const courseUnit = courseUnitsRepository.create({
            name,
            description
        })
        await courseUnitsRepository.save(courseUnit)
        return courseUnit ;
    }
}

export {CreateCourseUnitService}